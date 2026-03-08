import React, { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Place from './components/Place';
import Invitation from './components/Invitation';
import Timing from './components/Timing';
import DressCode from './components/DressCode';
import CountdownWithQR from './components/CountdownWithQR';
import Gifts from './components/Gifts';
import Questionnaire from './components/Questionnaire';

function App() {
  return (
    <div className="App">
      <Hero/>
      <CountdownWithQR/>
      <Invitation />
      <Place />
      <Timing />
      <Gifts />
      <Questionnaire />
    </div>
  );
}

export default App;