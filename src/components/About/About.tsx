import styles from './About.module.css'

export const About = () => {
  return (
    <div className={styles.root}>
      <div className={styles.picture}>Picture</div>
      <div>
        <div className={styles.fadeInUp}>
          <div className={styles.titleContainer}>
            <h1 className={styles.aboutHeadline}>Misael Burboa</h1>
            <h2 className={styles.aboutHeadlineBackground}>About Me</h2>
          </div>
          <p className={styles.description}>
            I&apos;m a web developer I&apos;m currently focused more in front end, but love working
            the backend as well
          </p>
          <ul className={styles.infoList}>
            <li className={styles.infoPropContainer}>
              <span className={styles.infoProp}>Name:</span>
              <span>Misael Burboa</span>
            </li>
            <li className={styles.infoPropContainer}>
              <span className={styles.infoProp}>Date Of Birth:</span>
              <span>Dec 10, 1988</span>
            </li>
            <li className={styles.infoPropContainer}>
              <span className={styles.infoProp}>Address:</span>
              <span>Cda de los Condes 9, Hermosillo SON 83287 Mexico</span>
            </li>
            <li className={styles.infoPropContainer}>
              <span className={styles.infoProp}>Email:</span>
              <span>cmburboa@gmail.com</span>
            </li>
            <li className={styles.infoPropContainer}>
              <span className={styles.infoProp}>Phone:</span>
              <span>+52 (662) 1836340, +52 (662) 3118623</span>
            </li>
          </ul>
          <a href="#" className={styles.link}>
            <span>&#128195;</span> Download my resume!
          </a>
        </div>
      </div>
    </div>
  )
}
