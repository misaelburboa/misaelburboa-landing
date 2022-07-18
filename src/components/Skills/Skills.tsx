import { useEffect, useRef } from 'react'

import { Card, Content, Title } from '@/components/Card'
import { Skill } from '@/components/Skills/Skill'

import styles from './Skills.module.css'

export const Skills = () => {
  const skillsRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fadeInUp)
        }
      })
    })

    observer.observe(skillsRef.current)

    return () => {
      observer.disconnect()
    }
  })

  return (
    <div className={styles.root} ref={skillsRef}>
      <div className={styles.titleContainer}>
        <h1 className={styles.headline}>Skills</h1>
        <h2 className={styles.headlineBackground}>Skills</h2>
      </div>
      <div className={styles.cardsContainer}>
        <Card className={styles.skillsCard}>
          <Title className={styles.cardTitle}>Frontend</Title>
          <Content className={styles.skillsContainer}>
            <Skill name="React" percentage={90} color="#00c3ff" />
            <Skill name="Next JS" percentage={80} color="#060707" />
            <Skill name="Angular" percentage={60} color="#a6120d" />
            <Skill name="HTML" percentage={90} color="#4E24CA" />
            <Skill name="Javascript" percentage={90} color="#EFD81D" />
          </Content>
        </Card>
        <Card className={styles.skillsCard}>
          <Title className={styles.cardTitle}>Backend</Title>
          <Content className={styles.skillsContainer}>
            <Skill name="AWS" percentage={40} color="#F29100" />
            <Skill name="MySql" percentage={70} color="#E2A670" />
            <Skill name="Nest JS" percentage={70} color="#D9224C" />
            <Skill name="Node" percentage={70} color="#68A063" />
            <Skill name="PHP" percentage={80} color="#858EBB" />
            <Skill name="PostgresSQL" percentage={70} color="#2F5E8D" />
          </Content>
        </Card>
      </div>
    </div>
  )
}
