import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { About } from '@/components/About'
import * as Carousel from '@/components/Carousel'
import { Navbar } from '@/components/Navbar'
import { Resume } from '@/components/Resume'
import { Skills } from '@/components/Skills'
import { WidescreenContainer } from '@/components/WidescreenContainer'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <WidescreenContainer>
      <Navbar />
      <Carousel.Container>
        <Carousel.Item>
          <Image
            alt="frontend development"
            src="/images/Front-end-Development.jpeg"
            layout="fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            alt="frontend development"
            src="/images/Front-end-Development.jpeg"
            layout="fill"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            alt="frontend development"
            src="/images/Front-end-Development.jpeg"
            layout="fill"
          />
        </Carousel.Item>
      </Carousel.Container>
      <div className={styles.container}>
        <Head>
          <title>Misael Burboa</title>
          <meta name="description" content="Misael Burboa - Web Developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <About />

          <Resume />

          <Skills />
        </main>
      </div>
    </WidescreenContainer>
  )
}

export default Home
