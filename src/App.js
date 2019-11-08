import React from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import WikiHome from './Components/Wiki/WikiHome';
import Navbar from './Components/Navbar.js/Navbar';
import ChaptersHome from './Components/Chapters/ChaptersHome';
import MainRender from './Components/Videos/Season_1/MainRender';

function App() {
  return (
    <div>
      <Navbar/>
  <Route path="/Wiki" component={WikiHome}></Route>
  <Route path = "/Episodes"/>
  <Route path="/Season_1" component={MainRender}/>
  <Route path="/Season_2"/>
  <Route path= '/Season_3'/>
  <Route path="/Season_4"/>
  <Route path="/Chapters" component={ChaptersHome}/>

    </div>
  );
}

export default App;
