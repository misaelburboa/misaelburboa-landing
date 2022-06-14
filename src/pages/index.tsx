import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import styles from '../styles/Home.module.css'
import { WidescreenContainer } from '@/components/WidescreenContainer'

const Home: NextPage = () => {
  return (
    <WidescreenContainer>
      <Head>
        <title>Misael Burboa</title>
        <meta name="description" content="Misael Burboa - Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>asdasd</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </WidescreenContainer>
  )
}

export default Home
