"use client"

import React from "react";
import "./footer.css";

interface FooterProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const Footer = ({theme, setTheme}: FooterProps) => {

        const toggle_mode = () =>{
            theme == 'light' ?  setTheme('dark') : setTheme('light');      
        }

        return (
        <div className='footer'>
            <ul>
                <li><a href="/">Back to Top</a></li>
                <p>follow your dreams! Sincerely by N, with ❤️. &copy; {new Date().getFullYear()} All rights reserved.</p>
            </ul>
        </div>
    )
}

export default Footer;