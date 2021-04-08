import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import { EmployerTable } from './components/employers/EmployerTable';
import {Display} from './components/Display';
import {NavigationBar} from './components/Navigation';
//import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Display></Display>
      {/* <EmployerTable></EmployerTable> */}
    </div>
  );
}

export default App;
