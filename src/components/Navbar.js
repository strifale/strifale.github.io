import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='navbar'></nav>
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRVL <i className="fab fa-typo3"></i>
            </Link>
        </div>
    </div>
  );
}

export default Navbar