import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './others/scrollToTop.js';


function Layout() {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Outlet />
    {/* <Footer /> */}
    </>
  )
}

export default Layout