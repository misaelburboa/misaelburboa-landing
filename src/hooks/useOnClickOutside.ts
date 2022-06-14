import { RefObject, useEffect } from 'react'

type EventType = MouseEvent | TouchEvent

export const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: EventType) => void
) => {
  useEffect(
    () => {
      const listener = (event: EventType) => {
        console.log(ref)

        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return
        }

        console.log('passed')

        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}