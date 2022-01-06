
import React, { useState } from 'react';

import { ToastContainer, Toast, Container, Button, Row, Col, FormControl, Card } from 'react-bootstrap'

import './App.css';

export const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

export const ButApp = () => (
  <Container className="p-3">
    <ToastContainer>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </ToastContainer>
  </Container>
);


export default function LayerTop() {
    return (
        <div>
            <Container>
            <Row>
                <Col xs>
                <Card /> First  top right half </Col>
                <Col xs>
                <Card /> Second top left half</Col>
            </Row>
            <Row>
                <Col sm>first bottom 1/3</Col>
                <Col sm>second bottom 1/3</Col>
                <Col sm>third bottom 1/3</Col>
            </Row>
            </Container>

            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={5}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>

            <Container>
                <ButApp />
            </Container>
            <div>
              <div className='gap={3}'>
                <FormControl className="me-auto" placeholder="Add your item here..." />
                <Button variant="secondary">Submit</Button>
                  <div className="vr" />
                <Button variant="outline-danger">Reset</Button>
            </div>
            </div>

        </div>
    )
};
export function Layout() {
  return (
    <section className="bg-grey-100 font-sans leading-normal tracking-normal">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-indigo-500">Hello World</h1>
      </div>
    </section>
  )
}