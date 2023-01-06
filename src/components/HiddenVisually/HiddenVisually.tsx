// Source: https://polaris.shopify.com/components/titles-and-text/visually-hidden
// Source: https://seek-oss.github.io/braid-design-system/components/HiddenVisually
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './HiddenVisually.module.css'

interface HiddenVisuallyProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node
   */
  asChild?: boolean

  /**
   * The content to display
   */
  children: React.ReactNode

  /**
   * The HTML class name.
   */
  className?: string
}

type Ref = HTMLElement

export const HiddenVisually = forwardRef<Ref, HiddenVisuallyProps>(
  ({ asChild = false, children, className, ...props }, ref) => {
    const Element = asChild ? Slot : 'span'

    return (
      <Element ref={ref} className={clsx(styles.base, className)} {...props}>
        {children}
      </Element>
    )
  }
)

HiddenVisually.displayName = 'HiddenVisually'
