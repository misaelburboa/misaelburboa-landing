import clsx from 'clsx'

import styles from './Card.module.css'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={clsx(className, styles.root)}>{children}</div>
}

interface TitleProps {
  children: React.ReactNode
  className?: string
}
export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>
}

interface ContentProps {
  children: React.ReactNode
  className?: string
}
export const Content: React.FC<ContentProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}
