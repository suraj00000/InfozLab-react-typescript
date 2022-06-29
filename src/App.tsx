import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CovidData } from './componets/CovidData';
import { First } from './componets/Week2/First';

function App() {
  return (
    <>
    <div className="container">

    
    <CovidData/>
    {/* <First/> */}
    </div>
    </>
  );
}

function Add(){
  var a =100,b=50;
  return(
    <div>
      <h1>{a+b}</h1>
    </div>
  )
}

export default App;
export {Add};
