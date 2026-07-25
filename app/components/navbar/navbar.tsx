'use client';

import React, { useState } from "react";
import "./navbar.css";

import tulip from "../assets/tulip.png";
import search_day from "../assets/search_light.png";
import search_night from "../assets/search_dark.png";
import toggle_light from "../assets/moon.png";
import toggle_dark from "../assets/sun.png";


interface NavbarProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}


const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');        
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <img src={tulip.src} alt="Logo" className='logo' />
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li className="dropdown">
          <a href="#projects">Projects ▾</a>
          <ul className="dropdown-menu">
            <li><a href="#webdev" onClick={closeMenu}>Web Development Projects</a></li>
            <li><a href="#gamedev" onClick={closeMenu}>Game Development Projects</a></li>
            <li><a href="#illust" onClick={closeMenu}>Illustration Project</a></li>
          </ul>
          </li>
            <li><a href="#skills" onClick={closeMenu}>Skills & Tools</a></li>
            <li><a href="#findme" onClick={closeMenu}>Find Me</a></li>
          </ul>
      {/* 
      <div className='search-box'>
        <input type="text" placeholder='Search...' />
        <img src={theme == 'light' ? search_day.src : search_night.src} className="search-icon" alt="Search" /> 
      </div>
      */}
      <div className='nav-actions'>
        <img 
          onClick={toggle_mode} 
          src={theme == 'light' ? toggle_light.src : toggle_dark.src} 
          alt="Toggle Light" 
          className='toggle-icon' 
        />

        <div 
            className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;