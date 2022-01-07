import styles from './styles/Home.module.css'
import React from 'react'
//import { projects, skills } from './data'
import {MainBut} from './button'
import Link from 'next/link';
import Image from 'next/image';

// 2 HEADER COMPO AND WRAPPER w/ IMG

export function Header({children}) {
return (
  <Header as={'nav'} className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
      Dionysus Era
      </Link>
      <button className="btn btn-dark">Sign In</button>
      <Link
      className='button'
      href="https://github.com/bahim22/last-nxt-ded"
      target="_blank"
      rel="noopener"
      primary
    >
      Dionysus GitHub Pro
    </Link>
    <MainBut as={Link} href="/posts/notes">
      Documentation Posts
    </MainBut>
    {children}
  </Header>
  );
};
export const HeaderTwo = ({props, context}) => {
    const name = props.name

    return (
     <div className={styles.main}>
      <Wrapper className='wrapper'>
      {context}
       <h1 className={styles.title}>{message}</h1>
       <h2 className={styles.title}>{name}</h2>
      </Wrapper>
     </div>
    )
};

export const Wrapper = ({ message, children }) => {
return (
 <section className={children}>
  {message}
  <Image
   src="/img/bg7.jpg"
   className={styles.flex}
   height={200}
   width={200}
   alt="Nx Next Preview"
  />
  <Image
   src="/img/bg7.jpg"
   className={styles.flex}
   height={200}
   width={200}
   alt="Django preview"
  />
  <Image
   src="/img/bg7.jpg"
   className={styles.flex}
   height={200}
   width={200}
   alt="React Preview"
  />
 </section>
)
};
