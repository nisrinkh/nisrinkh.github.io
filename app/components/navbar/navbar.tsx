import React from "react";
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
  
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');        
  };

  return (
    <div className='navbar'>
      <img src={tulip.src} alt="Logo" className='logo' />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills & Tools</a></li>
        <li><a href="#findme">Find Me</a></li>
      </ul>
      {/* 
      <div className='search-box'>
        <input type="text" placeholder='Search...' />
        <img src={theme == 'light' ? search_day.src : search_night.src} className="search-icon" alt="Search" /> 
      </div>
      */}
      
      <img 
        onClick={toggle_mode} 
        src={theme == 'light' ? toggle_light.src : toggle_dark.src} 
        alt="Toggle Light" 
        className='toggle-icon' 
      />
    </div>
  );
}

export default Navbar;