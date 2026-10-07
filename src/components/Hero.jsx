"use client";
import React from "react";

export default function Hero() {
  return (
    <>
      <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge-pill">
            <span>Hello, I am</span>
          </div>

          <h1 className="hero-title">
            Arman Hossain
          </h1>

          <div className="hero-role-title">
            Full Stack Software Developer
          </div>

          <div className="typewriter-box">
            <span className="typewriter-prefix">Specialized in </span>
            <span className="typewriter-text" id="typewriterText"></span>
            <span className="typewriter-cursor">|</span>
          </div>

          <p className="hero-description">
              Building elegant software with clean code. Driven by curiosity and dedicated to solving real-world problems through modern technologies across AI/ML, mobile and web development, backend systems, and IoT.          </p>

          <div className="hero-cta-group">
            <button className="btn btn-pill-dark" id="heroResumeBtn">
              <i className="fa-solid fa-download"></i>
              <span>Download Resume</span>
            </button>
            <a href="#projects" className="btn btn-pill-white">
              <i className="fa-regular fa-folder-open"></i>
              <span>Explore Projects</span>
            </a>
            <a href="#contact" className="btn btn-pill-ghost">
              <i className="fa-regular fa-paper-plane"></i>
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a href="https://github.com/Arman11217" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub (Arman11217)" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arman-hossain-59656932a/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="mailto:ahrashel1213@gmail.com" className="social-icon" title="Email: ahrashel1213@gmail.com" aria-label="Email">
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a href="https://www.facebook.com/ArmanHossain.26" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/8801793543783" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp (+8801793543783)" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-person-wrapper">
            <div className="hero-aura-glow"></div>
            <div className="hero-aura-glow aura-secondary"></div>
            <img src="assets/images/IMG_4449-removebg-preview.png" alt="Arman Hossain" className="hero-person-img" id="heroProfileImg" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
