import type { NextPage } from 'next'
import Head from 'next/head'

import { About } from '@/components/About'
import { Navbar } from '@/components/Navbar'
import { WidescreenContainer } from '@/components/WidescreenContainer'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <WidescreenContainer>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Misael Burboa</title>
          <meta name="description" content="Misael Burboa - Web Developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <About />
        </main>

        <footer className={styles.footer}>Here Goes the Footer</footer>
      </div>
    </WidescreenContainer>
  )
}

export default Home
