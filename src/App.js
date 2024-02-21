import React, {useState, useEffect} from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserStatus from './components/UserStatus';
import CadastrarVendedores from './components/CadastrarVendedor';

 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes> 
               <Route path="/" element={<Login/>}/>
               <Route path="/login"  element={<Login/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/cadastrarVendedores" element={<CadastrarVendedores/>}/>
            </Routes>    
            <UserStatus />                
        </section>
      </div>
    </Router>
  );
}
 
export default App;