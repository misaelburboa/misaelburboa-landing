import React from 'react'

import styles from './WidescreenContainer.module.css'

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
