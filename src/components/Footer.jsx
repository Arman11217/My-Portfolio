"use client";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
    <div className="container footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <span className="logo-symbol">&lt;/&gt;</span>
          <span className="logo-name">Arman<span className="highlight">.dev</span></span>
        </div>
        <p className="footer-tagline">Crafting scalable software, modern mobile experiences, and smart AI solutions.</p>
      </div>

      <div className="footer-socials">
        <a href="https://github.com/Arman11217" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/arman-hossain-59656932a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="https://www.facebook.com/ArmanHossain.26" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="https://wa.me/8801793543783" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="mailto:ahrashel1213@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
      </div>

      <div className="footer-right">
        <p>&copy; <span id="currentYear"></span> Arman Hossain. All rights reserved.</p>
        <p className="pstu-badge">CSE • Patuakhali Science and Technology University</p>
      </div>
    </div>
  </footer>
    </>
  );
}
