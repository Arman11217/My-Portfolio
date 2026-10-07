"use client";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio_theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio_theme', newTheme);
  };

  return (
    <>
      <header className="navbar" id="navbar">
        <div className="nav-container">
          <a href="#hero" className="brand-logo">
            <span className="logo-symbol">&lt;/&gt;</span>
            <span className="logo-name">Arman<span className="highlight">.dev</span></span>
          </a>

          <nav className="nav-menu" id="navMenu">
            <ul className="nav-list">
              <li className="nav-item"><a href="#hero" className="nav-link active">Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
              <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
              <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
              <li className="nav-item"><a href="#interests" className="nav-link">Interests</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button 
              id="themeToggle" 
              className="theme-toggle" 
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'} 
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <i className="fa-solid fa-sun"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
            </button>
            <button className="btn btn-sm btn-outline-nav" id="openResumeBtn" title="View Resume">
              <i className="fa-solid fa-file-invoice"></i> Resume
            </button>
            <a href="#contact" className="btn-talk">
              <span>Let's Talk</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <button className="hamburger" id="hamburger" aria-label="Open menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
