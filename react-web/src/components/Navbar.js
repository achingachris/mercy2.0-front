import React from 'react'
import {Tab} from 'bootstrap';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <NavbarContainer className="navbar navbar-expand-lg bg-light sticky-top">
    
  <div className="container-fluid">
    <NavLink to="/"><h5 className="navbar-brand text-uppercase">MERCY</h5></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span>
        <i className='fas fa-bars' style={{color:'#fff'}}/>
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <NavLink to="/about"><li className='list1 nav-item nav-link ml-5'>About Mercy</li></NavLink>
        <NavLink to="/guide"><li className='list1 nav-item nav-link ml-5'>Business Guide</li></NavLink>
        <NavLink to="/support"><li className='list1 nav-item nav-link ml-5'>Add your Business <br/>Support Organization</li></NavLink>
        <NavLink to="/model"><li className='list1 nav-item nav-link ml-5'>Find Role Model</li></NavLink>
      </ul>
    </div>
  </div>
  
</NavbarContainer>

  )
}

export default Navbar
const NavbarContainer=styled.nav`
.navbar{
    text-decoration:none;
    margin-top:5rem;
    padding-top:3rem;
    position: sticky;
}
h5 a{
    padding-left:2rem;
}
.list1{
  text-decoration:none;
  margin-right:6rem
    text-align:right;
    text-align:center;
    margin-left:3rem
}
.list1:hover{
  text-decoration:underline;
}
a{
  text-decoration:none;
}

`;