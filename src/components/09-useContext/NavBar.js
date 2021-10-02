import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
       <div class="container-fluid">
         <Link to="/" className="navbar-brand" >Login App</Link>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link exact to="/" className="nav-item nav-link active">Home</Link>
        <Link exact to="/about" className="nav-item nav-link">About</Link>
        <Link exact to="/login" className="nav-item nav-link">Login</Link>

      </div>
    </div>
  </div>
</nav>
        
        
    )
}
