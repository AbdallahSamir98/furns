import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import MainNavbar from '../NavBar/MainNavbar/MainNavbar'
import Navbar from '../NavBar/Navbar'

export default function Render() {
  return (
    <>
        <Navbar/>
        <MainNavbar/>
        <Outlet/>
        <Footer/>
    
    </>
  )
}
