import { useEffect, useRef } from 'react'

import { Card, Content, Title } from '@/components/Card'

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
    <div ref={resumeRef}>
      <div className={styles.titleContainer}>
        <h1 className={styles.headline}>Resume</h1>
        <h2 className={styles.headlineBackground}>Resume</h2>
      </div>
      <div className={styles.cardsContainer}>
        <Card>
          <div className={styles.cardDate}>2014 - 2015</div>
          <Title className={styles.cardTitle}>Master Degree of Computer Science</Title>
          <Content className={styles.cardDescription}>ALksjdlaksjdkalsjflaksjflkasjf</Content>
        </Card>
      </div>
    </div>
  )
}
