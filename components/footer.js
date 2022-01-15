import Image from "next/image";
//import Link from "next/link";
import styles from '../styles/Home.module.css'
export default function Footer () {
const footTitle = 'DED Next Portfolio'
  return (
    <>
      <footer className={styles.footer}>
        <h1>{footTitle}</h1>
        <a href="https://github.com/bahim22" target="_blank" rel="noopener noreferrer" />
        Dionysus Era Dev
          <a href="https://github.com/bahim22" target="_blank" rel="noopener noreferrer">
            GULLO{' '}
            <span className={styles.logo}>
              <Image src="/logo.svg" alt="Dionysus Logo" width={125} height={50} />
            </span>
          </a>
      </footer>
    </>
  )
}

//OldFoot.defaultProps = Image({...all}, ImageProps)