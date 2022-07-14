import styles from './Card.module.css'

export const Card = () => {
  return (
    <div className={styles.root}>
      <div className={styles.date}>2014 - 2015</div>
      <h2 className={styles.title}>Master Degree of Computer Science</h2>
      <h4 className={styles.subtitle}>Universidad de Sonora</h4>
      <p className={styles.description}>
        aksfhñlksahldfjsñ asldfh asñdfjh añsdjsñafkadhjsf ñadssd sja dfñahjsd fñahsdfh asdñkh asd
        fñahjsd ñfahjsd f
      </p>
    </div>
  )
}
