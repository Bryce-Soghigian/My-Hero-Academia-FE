import React from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import WikiHome from './Components/Wiki/WikiHome';
import Navbar from './Components/Navbar.js/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
  <Route to="/Wiki" component={WikiHome}></Route>
    </div>
  );
}

export default App;
