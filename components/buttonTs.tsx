/* eslint-disable  */
/*
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from './Home.module.css'

//TypeScript Buttons

const MyButton = React.forwardRef(({ onClick, href }: any, ref) => {
return (
<a href={href} onClick={onClick} ref={ref}>
    Click Me
</a>
)
});


const SecButton = React.forwardRef(({ onClick, href }, ref) => {
return (
<a href={href} onClick={onClick} ref={ref}>
    Click Me now
</a>
)
})
import React, {Component} from 'react'
import './styles/Home.module.css'
import PropTypes from 'prop-types'
//import {Col} from './Col';
//import styled from 'styled-components';
//import theme from 'styled-theming';

// if mode and variant STYLED BUTTONS

const BG_COLOR = theme.variants('mode', 'variant', {
 default: {
  default: (props) => props.theme.colors.primary,
  light: (props) => props.theme.colors.primary,
 },
 success: {
  default: (props) => props.theme.colors.primary,
  light: (props) => props.theme.colors.primary,
 },
 warning: {
  default: (props) => props.theme.colors.primary,
  light: (props) => props.theme.colors.primary,
 },
})

const MainBut = ({props}) => {
 const [title, setTitle] = setState(true)
 //const setTitle='default';
 return (
  <>
   <Button title={props.setTitle}>default button</Button>
   <Button variant="success">success button</Button>
  </>
 )
}
MainBut.propTypes = {
 variant: PropTypes.oneOf(['default', 'success', 'warning']),
}
MainBut.defaultProps = {
 variant: 'default',
}
const Contain = ({children}) => {
 return (
  <div className="container">
   <div className="main">
    <section>{children}</section>
   </div>
  </div>
 )
}
*/