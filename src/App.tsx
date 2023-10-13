import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs.tsx/AboutUs';
import Products from './pages/Products/Products';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Header/>

      <Routes>
        <Route 
            path='/'
            element={<Home />}
          />
          <Route 
            path='/home'
            element={<Home />}
          />
          <Route 
            path='/aboutus'
            element={<AboutUs />}
          />
          <Route 
            path='/products'
            element={<Products />}
          />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
