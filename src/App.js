import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import WikiHome from './Components/Wiki/WikiHome';
import Navbar from './Components/Navbar.js/Navbar';
import ChaptersHome from './Components/Chapters/ChaptersHome';

import SeasonOneRender from './Components/Videos/Season_1/SeasonOneRender';
import Video_Home from './Components/Videos/Video_Home';

function App() {
  return (
    <div>
      <Navbar/>
  <Route path="/Wiki" component={WikiHome}></Route>
  <Route path = "/Episodes" component={Video_Home}/>
  <Route path="/Season_1" component={SeasonOneRender}/>
  <Route path="/Season_2"/>
  <Route path= '/Season_3'/>
  <Route path="/Season_4"/>
  {/* <Route path="/test" component={Test}/> */}
  <Route path="/Chapters" component={ChaptersHome}/>

    </div>
  );
}

export default App;
