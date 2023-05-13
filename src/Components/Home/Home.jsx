import React from 'react'
import { Outlet } from 'react-router-dom'
import Blog from '../Blog/Blog'
import Collection from '../Collection/Collection'
import AllProducts from '../HomeProducts/AllProducts'
import HomeProducts from '../HomeProducts/HomeProducts'
import Products from '../Products/Products'
import ControlledCarousel from './CarsoulHome/Carsoul'
import './Home.css'

export default function Home() {


  return (
    <div className=''>
        
      <ControlledCarousel/> 
       <Collection/> 
       <Products/> 
       <HomeProducts/>
      <Blog />
   
    </div>
  )
}
