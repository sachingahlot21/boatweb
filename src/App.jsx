import { useState,useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Slider1 from './components/topbody/Slider1'
import Body1 from './components/bestSellers/Body1'
import Main from './components/bodyblackf/Main'
import Footer from './components/Footer/Footer'
import Shopbycat from './components/shopbycat/Shopbycat'
import Newlaunch from './components/newlaunch/Newlaunch'
import Shopbylife from './components/shopbylife/Shopbylife'
import Bestofboat from './components/bestofboat/Bestofboat'
import Jointhetribe from './components/jointhetribe/Jointhetribe'
import Cart from './components/cart/Cart.jsx'
import Pressdiv from './components/pressdiv/Pressdiv'
import './App.css'
import { useLocation } from "react-router-dom";
import CartContext from './context/CartContext.jsx'

function App() {
 

  return (
    <>
    {/* <Navbar /> */}

    <Slider1 />
    <Body1 />
    <Main />
    <Shopbycat />
    <Newlaunch />
    <Shopbylife />
    <Bestofboat />
    <Jointhetribe />
    <Pressdiv />
    
    {/* <Footer /> */}
   
    </>
  )
}

export default App
