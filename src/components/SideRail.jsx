"use client";
import React from "react";

export default function SideRail() {
  return (
    <>
      <aside className="kinetic-side-rail" id="kineticSideRail" aria-label="Section Journey">
    <div className="rail-filament-track">
      <div className="rail-filament-glow" id="railFilamentGlow"></div>
    </div>
    <nav className="rail-nodes" id="railNodes">
      <a href="#projects" className="rail-node" data-section="projects" title="Featured Projects">
        <div className="rail-node-badge">
          <span className="rail-pulse-beacon"></span>
          <span className="rail-node-icon"><i className="fa-solid fa-shapes"></i></span>
          <div className="rail-node-content">
            <span className="rail-node-label">Projects</span>
          </div>
        </div>
        <span className="rail-node-tooltip">Projects</span>
      </a>

      <a href="#skills" className="rail-node" data-section="skills" title="Technical Arsenal">
        <div className="rail-node-badge">
          <span className="rail-pulse-beacon"></span>
          <span className="rail-node-icon"><i className="fa-solid fa-microchip"></i></span>
          <div className="rail-node-content">
            <span className="rail-node-label">Skills</span>
          </div>
        </div>
        <span className="rail-node-tooltip">Skills</span>
      </a>

      <a href="#experience" className="rail-node" data-section="experience" title="Experience & Credentials">
        <div className="rail-node-badge">
          <span className="rail-pulse-beacon"></span>
          <span className="rail-node-icon"><i className="fa-solid fa-graduation-cap"></i></span>
          <div className="rail-node-content">
            <span className="rail-node-label">Experience</span>
          </div>
        </div>
        <span className="rail-node-tooltip">Experience</span>
      </a>

      <a href="#interests" className="rail-node" data-section="interests" title="Research & Interests">
        <div className="rail-node-badge">
          <span className="rail-pulse-beacon"></span>
          <span className="rail-node-icon"><i className="fa-solid fa-atom"></i></span>
          <div className="rail-node-content">
            <span className="rail-node-label">Interests</span>
          </div>
        </div>
        <span className="rail-node-tooltip">Interests</span>
      </a>

      <a href="#contact" className="rail-node" data-section="contact" title="Get in Touch">
        <div className="rail-node-badge">
          <span className="rail-pulse-beacon"></span>
          <span className="rail-node-icon"><i className="fa-regular fa-paper-plane"></i></span>
          <div className="rail-node-content">
            <span className="rail-node-label">Contact</span>
          </div>
        </div>
        <span className="rail-node-tooltip">Contact</span>
      </a>
    </nav>
  </aside>
    </>
  );
}
