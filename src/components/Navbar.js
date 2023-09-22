import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click); //logic is that handleClick is a func, 
    const closeMobileMenu = () => setClick(false);
    
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    ST <i className="fa-solid fa-bolt"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa-solid fa-x' : 'fa-solid fa-bars'}></i>                    
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to= '/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to= '/aboutMe' className="nav-links" onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to= '/projects' className="nav-links" onClick={closeMobileMenu}>
                           Projects
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to= '/resume' className="nav-links-resume" onClick={closeMobileMenu}>
                           Resume
                        </Link>
                    </li>


                </ul>
            </div>
        </nav>
  );
}

export default Navbar