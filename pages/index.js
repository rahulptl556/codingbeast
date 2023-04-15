import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Coding Beast</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
        Welcome to Coding Beast
        </h1>

        <Image src="/img.jpg" width={237} height={158}></Image>

        <div className={styles.blogs}>

          <h2 >Popular Blogs</h2> 

          <div className={styles.blog}>
            <h3>How to learn JavaScript in 2023</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, corporis?</p>

            <button className={styles.button}>Read More</button>        
          </div>

          <div className={styles.blog}>
            <h3>How to learn JavaScript in 2023</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, corporis?</p>

            <button className={styles.button}>Read More</button>        
          </div>

          <div className={styles.blog}>
            <h3>How to learn JavaScript in 2023</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, corporis?</p>

            <button className={styles.button}>Read More</button>        
          </div>
        </div>
     </main>  
     
    </div>
  )
}

export default Home;