import styles from './WidescreenContainer.module.css'
import React from 'react'

interface WidescreenContainerProps {
  children: React.ReactNode
}

export const WidescreenContainer: React.FC<WidescreenContainerProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.innerContainer}>{children}</div>
    </div>
  )
}
