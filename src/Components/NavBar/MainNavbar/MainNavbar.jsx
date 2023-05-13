import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNavbar() {
  return (
    <div className=''>
        

<nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark " >
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link ms-1 " aria-current="page" to='home'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-1 " aria-current="page" to='about'>About</Link>
        </li>

        <li class="nav-item dropdown ms-1">
          <Link class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Home Furniture
          </Link>
          <ul class="dropdown-menu ">
            <li><Link to='/living' class="dropdown-item" >Bedroom</Link></li>
            <li><Link to='/living' class="dropdown-item" >Dinning</Link></li>
            <li><Link to='/living' class="dropdown-item" >Living</Link></li>
          </ul>
        </li>


        <li class="nav-item dropdown ms-1">
          <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Office Furniture
          </a>
          <ul class="dropdown-menu">
            <li><Link to='/chair' class="dropdown-item" >Lounge</Link></li>
            <li><Link to='/chair' class="dropdown-item" >Office Chair</Link></li>
            <li><Link to='/chair' class="dropdown-item" >Office Table</Link></li>
          </ul>
        </li>
        
        <li class="nav-item dropdown ms-1">
          <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Hospital Furniture
          </a>
          <ul class="dropdown-menu">
            <li><Link to='/hospitial' class="dropdown-item" >Hospital Utility</Link></li>
          </ul>
        </li>

        <li class="nav-item ms-1">
          <Link class="nav-link " aria-current="page"  to='/register' >Contact</Link>
        </li>
        
          
        
      </ul>
    
    </div>
  </div>
</nav>


    </div>
  )
}
