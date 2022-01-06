/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
/*
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
*/

export const ExampleToast = ({ children }) => {
const [show, toggleShow] = useState(true);

return (
<React.Fragment>
    {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
    <Toast show={show} onClose={() => toggleShow(false)}>
    <Toast.Header>
        <strong className="mr-auto">Dionysus Era</strong>
    </Toast.Header>
    <Toast.Body>{children}</Toast.Body>
    </Toast>
</React.Fragment>
)};

/**Then import compo to app file w/in a container
 *
const App = () => (
  <Container className="p-4 bg-dark">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header align-auto">Welcome To HimaLand</h1>
      <ExampleToast>
        <a href="mailto:ibalde222@icloud.com">Send email</a>
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
      <Button className='bg-dark p-3 mb-4'/>
    </Container>
  </Container>
)
*
*/