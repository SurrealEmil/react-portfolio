import React, { useState, useEffect } from 'react';
import { FaAlignJustify, FaBriefcase} from "react-icons/fa6";
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';



const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(window.innerWidth <= 1000 ? false : true);
  const [homeOpen, setHomeOpen] = useState(false);
  const homeRoute = "/";
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setHamburgerOpen(false);
      } else {
        setHamburgerOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function toggleHam() {
    if (window.innerWidth <= 1000) {
      setHamburgerOpen(!hamburgerOpen);
    }
  };

  useEffect(() => {
    if (location.pathname === homeRoute) {
      setHomeOpen(true);
    } else {
      setHomeOpen(false);
    }
  }, [location.pathname, homeRoute])

  return (
    <>
      <header className='page-header'>
        <nav className='navbar'>

          <ul className='Logo-nav header-nav' style={{ display: 'flex'}}>
            <li><NavLink to="/" className='navlink' onClick={toggleHam}><FaBriefcase/></NavLink></li>
            <li><NavLink to="/" className='navlink' onClick={toggleHam} id="logo">Portfolio</NavLink></li>
          </ul>

          <nav className='Navigation' style={{ display: (hamburgerOpen) ? 'flex' : 'none' }}>
            <ul className='secondary-nav header-nav' style={{ display: (homeOpen && hamburgerOpen) ? 'flex' : 'none' }}>
              <li><Link to="about" smooth duration={500} className='scroll-link' onClick={toggleHam}>ABOUT ME</Link></li>
              <li><Link to="resume" smooth duration={500} className='scroll-link' onClick={toggleHam}>RESUMÉ</Link></li>
              <li><Link to="projects" smooth duration={500} className='scroll-link' onClick={toggleHam}>PROJECTS</Link></li>
            </ul>

            <ul className='secondary-nav header-nav' style={{ display: (hamburgerOpen) ? 'flex' : 'none' }}>
              <li><NavLink to="/" className='navlink' onClick={toggleHam}>HOME</NavLink></li>
              <li><NavLink to="contact" className='navlink' onClick={toggleHam}>CONTACT ME</NavLink></li>
            </ul>
          </nav>

          <div className='menuToggle' onClick={toggleHam}><FaAlignJustify /></div>

        </nav>

      </header>
    </>
  )
}

export default Header