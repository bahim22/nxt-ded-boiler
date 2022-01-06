import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { skills, projects } from './data'
import {NavTsx} from './navTop'

const Layout = (_props) => {
return(
<>
{children}
</>
)
}

Layout.propTypes = {}

export default Layout

export const Home = (...props) => {
return(
<>
<Layout>
    <NavTsx style={{}} 
</Layout>
</>
)
}

Home.propTypes = {}

/*
(property) Children: {
    map: (a: any, b: any, c: any) => any;
    forEach: (a: any, b: any, c: any) => void;
    count: (a: any) => number;
    toArray: (a: any) => any;
    only: (a: any) => any;
}
**/
