import React from 'react';
import './App.css';
import { CovidData } from './componets/Week1/CovidData';
import { First } from './componets/Week2/First';
import { Card, Container, Button } from 'react-bootstrap';
import { NewsAPI } from './componets/Week2/NewsAPI';

function App() {
  return (
    <>
      <Container >


        {/* <CovidData /> */}        
        {/* <First/> */}
        <NewsAPI/>
        
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
