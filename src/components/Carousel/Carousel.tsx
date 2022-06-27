import React from 'react'
import { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import styles from './Carousel.module.css'

interface ItemProps {
  children: React.ReactNode
  width?: string
}

export const Item: React.FC<ItemProps> = ({ children, width }) => {
  return (
    <div className={styles.carouselItem} style={{ width }}>
      {children}
    </div>
  )
}

interface CarouselProps {
  children: React.ReactElement[]
}
export const Container: React.FC<CarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 2000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  })

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  return (
    <>
      <div
        className={styles.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        {...handlers}
      >
        <div className={styles.inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { width: '100%' })
          })}
        </div>
      </div>
      <div>
        <button onClick={() => updateIndex(activeIndex - 1)}>Prev</button>
        {React.Children.map(children, (child, index) => {
          return <button onClick={() => updateIndex(index)}>{index + 1}</button>
        })}
        <button onClick={() => updateIndex(activeIndex + 1)}>Next</button>
      </div>
    </>
  )
}
