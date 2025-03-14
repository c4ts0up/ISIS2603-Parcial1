import React, {useRef, useState} from 'react';
import banner from './banner.png';
import './App.css';
import "react-bootstrap";
import {Button, Form} from "react-bootstrap";
import {Authentication} from "./components/Authentication";
import {RobotList} from "./components/RobotList";

function App() {
  return (
    <div className="App">
        <h1>Adopta un Robot con Robot Lovers!</h1>
        <img className="banner" src={banner} alt="banner" />

        <Authentication></Authentication>
        <RobotList></RobotList>

        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
    </div>
  );
}

export default App;
