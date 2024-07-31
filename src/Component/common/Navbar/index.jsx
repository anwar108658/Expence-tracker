import React, { useState } from 'react';
import icon from '../../../Image/bar.png';
import './Navbar.css';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h2>Expence Tracker</h2>
            </div>
            <ul className={`nav-link ${isNavVisible ? 'active' : ''}`}>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Service</a></li>
            </ul>
            <img className='icon-css' src={icon} alt="Menu" onClick={toggleNav} />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
