import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import { HiddenVisually } from '@/components/HiddenVisually/HiddenVisually'

import left from '../../../public/chevron-left.svg'
import right from '../../../public/chevron-right.svg'
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
  children: React.ReactElement[] | React.ReactElement
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
        <button
          className={clsx(styles.carouselControl, styles.carouselPrevButton)}
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <Image alt="" src={left} width="30" />
        </button>
        <div className={styles.inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { width: '100%' })
          })}
        </div>
        <button
          className={clsx(styles.carouselControl, styles.carouselNextButton)}
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <Image alt="" src={right} width="30" />
        </button>
      </div>
      <div className={styles.navigationBar}>
        {React.Children.map(children, (child, index) => {
          return (
            <button onClick={() => updateIndex(index)}>
              <div className={clsx(styles.navigationDot, index === activeIndex && styles.active)} />
              <HiddenVisually>Go to slide number {index}</HiddenVisually>
            </button>
          )
        })}
      </div>
    </>
  )
}
