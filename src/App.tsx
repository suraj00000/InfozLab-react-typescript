import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CovidData } from './componets/Week1/CovidData';
import { First } from './componets/Week2/First';
import { Card, Container,Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container fluid>      


        {/* <CovidData /> */}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top"  src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* <First/> */}
      </Container>
    </>
  );
}

function Add() {
  var a = 100, b = 50;
  return (
    <div>
      <h1>{a + b}</h1>
    </div>
  )
}

export default App;
export { Add };
