import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import Ejemplo1 from "./pages/Ejemplo1"
import Ejemplo2 from './pages/Ejemplo2';
import Mapa from './pages/Mapa';
import Json from './pages/Json';
import Api from './pages/Api';
function App() { 
    return (
      <div className="App">
          <Header/> 
          <BrowserRouter>
            <Nav/>
            <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/ejemplo1' element={<Ejemplo1/>}></Route>
              <Route path='/ejemplo2' element={<Ejemplo2/>}></Route>
              <Route path='/ejemplo3' element={<Mapa/>}></Route>
              <Route path='/json' element={<Json/>}></Route>
              <Route path='/api' element={<Api/>}></Route>
            </Routes>
            </BrowserRouter>
          <Footer/>
      </div>
    );

}

export default App;
