import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Courcehome from './components/cources/Courcehome';
const App = () => {
  return (
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='/courses' element={<Courcehome/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
