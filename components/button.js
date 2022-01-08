import React, { Component } from 'react';
import './styles/Home.module.css';
import PropTypes from 'prop-types';
import {Col} from './Col';
//import styled from 'styled-components';
//import theme from 'styled-theming';


// if mode and variant

const BG_COLOR = theme.variants('mode', 'variant', {
default: {
default: props => props.theme.colors.primary,
light: props => props.theme.colors.primary,
},
success: {
default: props => props.theme.colors.primary,
light: props => props.theme.colors.primary,
},
warning: {
default: props => props.theme.colors.primary,
light: props => props.theme.colors.primary,
}
});


const MainBut = (props) => {
return (
<>
<Button>default button</Button>
<Button variant="success">success button</Button>
</>
)
}
MainBut.propTypes = {
variant: PropTypes.oneOf(['default', 'success', 'warning'])
}
MainBut.defaultProps = {
variant: 'default',
}
const MainBut = (props) => {
    return(
        <>
        <Compo>
            <p>child 1</p>
            <p>child 2</p>
        </Compo>
        </>  
    )
}

/*
___
@param {type}   var           Info.
___
@param {type}   [var]         info of optional variable.
@param {type}   [var=default] info of optional var w/ default variable.
@param {Object} objectVar     info.
@param {type}   objectVar.key info of a key in the objectVar parameter.

import * as React from 'react';*/


const CoBut = styled(MainBut)`
    background-color: #A0A0A0;
    /* theming:  background-color: ${''};*/
`;

// default props
CoBut.defaultProps = {
    variant: 'default',
};

// prop types
CoBut.propTypes = {
variant: PropTypes.oneOf(['default', 'success', 'warning'])
};

export default CoBut

//header compo
import {Link, withRouter} from 'react-router-dom';

function Header(props) {

return (
<nav className="navbar navbar-dark bg-primary fixed-top">
    <Link className="navbar-brand" to="/">
    Dionysus Era
    </Link>
    <button className="btn btn-dark">Sign In</button>
</nav>
);
}


return(
  <div>
    <Button
      href="https://github.com/bahim22/last-nxt-ded"
      target="_blank"
      rel="noopener"
      primary
    >
      Dionysus GitHub Pro
    </Button>

    <Button as={Link} href="/docs">
      Documentation
    </Button>
  </div>
)
const Button = 