// import React from 'react'
// import './Header.css'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return ( 
//     <header>
//     <div className="fir-sec">
//       <h2>Feane</h2>
//       <div className="menu-toggle">
//         <i class='bxr  bx-menu'  ></i> 
//       </div>
//        </div>
//       <div className="second-sec">
//         <ul>
//           {/* <li><a href="#">HOME</a></li>
//           <li><a href="#">MENU</a></li>
//           <li><a href="#">ABOUT</a></li>
//           <li><a href="#">BOOKTABLE</a></li> */}
//           <li><Link to={'/'}>HOME</Link></li>
//           <li><Link to={'/about'}>ABOUT</Link></li>
//           <li><Link to={'/menu'}>MENUS</Link></li>
//           <li><Link to={'/book'}>BOOK TABLE</Link></li>
//         </ul>
//       </div>

//       <div className="third-sec">
//         <ul>
//           <li><a href="#"><i class='bxr  bx-user'  ></i> </a></li>
//           <li><a href="#"><i class='bxr  bx-cart'  ></i>  </a></li>
         
//           <li><a href="#"> <i class='bxr  bx-search'  ></i> </a></li>
//           <li><a href="#"> <button>Order Online</button> </a></li>
//         </ul>
        
     

//       </div>
 

   
//   </header>
   
//   )
// }

// export default Header;


// correcting mobile view
// import React, { useState } from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // Close menu when link is clicked (for mobile UX)
//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header>
//       <div className="fir-sec">
//         <h2>Feane</h2>
//         <div className="menu-toggle" onClick={toggleMenu}>
//           <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
//         </div>
//       </div>

//       <div className={`second-sec ${menuOpen ? 'active' : ''}`}>
//         <ul>
//           <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
//           <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
//           <li><Link to="/menu" onClick={closeMenu}>MENUS</Link></li>
//           <li><Link to="/book" onClick={closeMenu}>BOOK TABLE</Link></li>
//         </ul>
//       </div>

//       <div className="third-sec">
//         <ul>
//           <li><a href="#"><i className='bx bx-user'></i></a></li>
//           <li><a href="#"><i className='bx bx-cart'></i></a></li>
//           <li><a href="#"><i className='bx bx-search'></i></a></li>
//           <li><a href="#"><button>Order Online</button></a></li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;
  

//correction all

import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="fir-sec">
        <h2>Feane</h2>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
        </div>
      </div>

      <div className={`second-sec ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
          <li><Link to="/menu" onClick={closeMenu}>MENUS</Link></li>
          <li><Link to="/book" onClick={closeMenu}>BOOK TABLE</Link></li>
        </ul>
      </div>

      <div className="third-sec">
        <ul>
          <li><a href="#"><i className='bx bx-user'></i></a></li>
          <li><a href="#"><i className='bx bx-cart'></i></a></li>
          <li><a href="#"><i className='bx bx-search'></i></a></li>
          <li><a href="#"><button>Order Online</button></a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
