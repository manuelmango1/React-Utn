import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import Ejemplo1 from "./pages/Ejemplo1"
function App() { 
    return (
      <div className="App">
          <Header/> 
          <BrowserRouter>
            <Nav/>
            <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/ejemplo1' element={<Ejemplo1/>}></Route>
            </Routes>
            </BrowserRouter>
          <Footer/>
      </div>
    );

}

export default App;
