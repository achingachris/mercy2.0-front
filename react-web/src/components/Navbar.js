import React from 'react'
import {Tab} from 'bootstrap';
import styled from 'styled-components';
function Navbar() {
  return (
    <NavbarContainer className="navbar navbar-expand-lg bg-light sticky-top">
    
  <div className="container-fluid">
    <h5><a className="navbar-brand text-uppercase" href="#">MERCY</a></h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span>
        <i className='fas fa-bars' style={{color:'#000'}}/>
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <a className="nav-link ml-5" aria-current="page" href="#">About MERCY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-5" href="#">Business Guide</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-5" href="#">Add your Business<br/>Support Organization</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ml-5" href='#'>Find Role Model</a>
        </li>
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
ul li a{

    margin-right:6rem
    text-align:right;

}
ul li{
    text-align:center;
    margin-left:3rem;
}
ul li a:hover{
  text-decoration:underline;
}

`;