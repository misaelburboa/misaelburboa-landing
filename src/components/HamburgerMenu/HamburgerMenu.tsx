import clsx from 'clsx'
import styles from './HamburgerMenu.module.css'
import React from 'react'

interface Props {
  isOpen: boolean
}

export const HamburgerMenu: React.FC<Props> = ({ isOpen }) => {
  return (
    <div className={styles.hamburger}>
      <div className={clsx(styles.burger, isOpen ? styles.burger1Opened : styles.burger1Closed)} />
      <div className={clsx(styles.burger, isOpen ? styles.burger2Opened : styles.burger2Closed)} />
      <div className={clsx(styles.burger, isOpen ? styles.burger3Opened : styles.burger3Closed)} />
    </div>
  )
}
