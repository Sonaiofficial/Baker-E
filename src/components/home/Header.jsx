// import React from "react";

// const Header = () => {
//     return (
//         <>
//             {/* HEADER */}
//             <header>
//                 <div class="container">
//                     <nav class="navbar">
//                         <div class="menu-toggle">
//                             <i class="fas fa-bars"></i>
//                             <i class="fas fa-times"></i>
//                         </div>
//                         <a href="index.html" class="logo">Bakery</a>
//                         <ul class="nav-list">
//                             <li class="nav-item">
//                                 <a href="index.html" class="nav-link active">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a href="about.html" class="nav-link">About Us</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a href="about.html#reservation" class="nav-link">Reservation</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a href="bakers.html" class="nav-link">Bakers</a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>

//         </>
//     );
// }

// export default Header;


import React, { useState } from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleNavLinkClick() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="menu-toggle" onClick={handleMenuClick}>
              <i className="fas fa-bars"></i>
              <i className="fas fa-times"></i>
            </div>
            <Link className="logo" to='/'>Bakery</Link>
            <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
              <li className="nav-item">
                <a href="index.html" className="nav-link active" onClick={handleNavLinkClick}>Home</a>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='about' onClick={handleNavLinkClick}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='reservation' onClick={handleNavLinkClick}>Reservation</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='bakers' onClick={handleNavLinkClick}>Bakers</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;