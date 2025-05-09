import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Fotter from './Components/Fotter'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import AddToCart from './Pages/addToCart'
import ProductDetail from "./Pages/ProductDetail"
import categoryData from "./Pages/categoryData"
function App() {
  return (
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/productDetail/:id" element={<ProductDetail/>}/>
      <Route path="/addToCart" element={<AddToCart/>}/>
      <Route path="/categoryData/:name" element={<categoryData/>}/>
    </Routes>
    <Fotter/>
  </BrowserRouter>
  )
}

export default App
