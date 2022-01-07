import styles from './styles/Home.module.css'
import React from 'react'
import PropTypes from 'prop-types'
import { projects, skills } from './data'

const Header = ({props, context}) => {
    const projects = props.projects
    const skills = props.skills
    const name = props.name

    return (
     <div className={styles.main}>
      <Wrapper className='wrapper'>
       <h1 className={styles.title}>{message}</h1>
       <h2 className={styles.title}>{name}</h2>
      </Wrapper>
     </div>
    )   
}

export const Wrapper = ({ message, children }) => {
return (
<section className={children}>
{message}
</section>
)
};
export const TopWrap =(props, context) =>{
return (
   <>
    ({context})   
   </>  => {
  return <section className={children}>{message}</section>
 } 
)}


map(skills.map)
    
 export const ButtonClick(props) {
    return (
        <Button {...props} title={props.title} onClick={props.onClick} />
    )
}
