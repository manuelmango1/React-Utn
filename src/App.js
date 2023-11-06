import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() { 
    return (
      <div className="App">
          <Header/> 
          <BrowserRouter>
            <Nav/>
            <Routes>
              {/*<Route path='/' element={nombredelcomponente}></Route>*/}
            </Routes>
            </BrowserRouter>
          <Footer/>
      </div>
    );

}

export default App;
