import clsx from 'clsx'
import { useRef, useState } from 'react'
import styles from './Navbar.module.css'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'

interface Props {
  isOpen: boolean
}

const HamburgerIcon: React.FC<Props> = ({ isOpen }) => {
  return (
    <div className={styles.hamburger}>
      <div className={clsx(styles.burger, isOpen ? styles.burger1Opened : styles.burger1Closed)} />
      <div className={clsx(styles.burger, isOpen ? styles.burger2Opened : styles.burger2Closed)} />
      <div className={clsx(styles.burger, isOpen ? styles.burger3Opened : styles.burger3Closed)} />
    </div>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<HTMLElement>(null)
  useOnClickOutside(ref, () => setIsOpen(false))

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar} id="mb-navbar" onClick={toggleMenu} ref={ref}>
      <ul
        className={clsx(
          styles.navContainer,
          isOpen ? styles.navContainerOpened : styles.navContainerClosed
        )}
      >
        <li className={styles.navbarItem}>Home</li>
        <li className={styles.navbarItem}>About</li>
        <li className={styles.navbarItem}>Resume</li>
        <li className={styles.navbarItem}>Services</li>
        <li className={styles.navbarItem}>Skills</li>
        <li className={styles.navbarItem}>Projects</li>
        <li className={styles.navbarItem}>My Blog</li>
        <li className={styles.navbarItem}>Contact</li>
      </ul>
      <div>
        <HamburgerIcon isOpen={isOpen} />
      </div>
    </nav>
  )
}
