import styles from './Skill.module.css'

interface SkillProps {
  color: string
  name: string
  percentage: number
}

export const Skill: React.FC<SkillProps> = ({ color, name, percentage }) => {
  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h5>{name}</h5>
        <span>{percentage}%</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ backgroundColor: color, width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
