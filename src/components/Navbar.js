import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false)
    

    const handleClick = () => setClick(!click); // reverses the hamburger to bars from the boolean below and the hook
    const closeMobileMenu = () => setClick(false) // closes the mobile menu




    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    A & R Burnett
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}> {/* this allows the menu to slide in and out */}
                    <li className='nav-item'>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/AboutUs" className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/OurVehicles" className="nav-links" onClick={closeMobileMenu}>
                            Our Vehicles
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar

