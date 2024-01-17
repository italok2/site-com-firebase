import React, {useState, useEffect} from 'react';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes> 
               <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/home" element={<Home/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;