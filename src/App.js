import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact.js';
import Home from './Components/Pages/Home.js';
import Services from './Components/Pages/Services.js';
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path="/home" exact element={<Home/>}/>
            

          <Route path="about" exact element={<About/>}/>
            

          <Route path="/services" exact element={<Services/>}/>
            

          <Route path="/contact" exact element={<Contact/>}/>

          <Route path="*" exact element={<Home/>}/>
    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
