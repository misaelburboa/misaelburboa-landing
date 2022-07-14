import { useEffect, useRef } from 'react'

import { Card } from '@/components/Card'

import styles from './Resume.module.css'

export const Resume = () => {
  const resumeRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fadeInUp)
        }
      })
    })

    observer.observe(resumeRef.current)

    return () => {
      observer.disconnect()
    }
  })
  return (
    <div className="resume" ref={resumeRef}>
      <div className={styles.titleContainer}>
        <h1 className={styles.headline}>Resume</h1>
        <h2 className={styles.headlineBackground}>Resume</h2>
      </div>
      <div className={styles.cardsContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
