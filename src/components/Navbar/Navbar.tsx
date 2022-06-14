import { HamburgerMenu } from '@/components/HamburgerMenu'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import styles from './Navbar.module.css'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'

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
        <HamburgerMenu isOpen={isOpen} />
      </div>
    </nav>
  )
}
