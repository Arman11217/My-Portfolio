"use client";
import React from "react";

export default function Interests() {
  return (
    <>
      <section className="section interests-section" id="interests">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PASSION & VISION</span>
          <h2 className="section-title">Current Research & <span className="gradient-text">Interests</span></h2>
          <p className="section-subtitle">The emerging technologies and problem spaces that captivate my intellect and drive my continuous learning.</p>
          <div className="header-line"></div>
        </div>

        <div className="interests-grid">
          <div className="interest-card">
            <div className="interest-icon-box cyan-glow">
              <i className="fa-solid fa-brain"></i>
            </div>
            <h3 className="interest-title">Artificial Intelligence & ML</h3>
            <p className="interest-desc">
              Investigating deep learning topologies, model optimization, transfer learning, and deploying lightweight intelligence onto edge microcontrollers.
            </p>
          </div>

          <div className="interest-card">
            <div className="interest-icon-box indigo-glow">
              <i className="fa-solid fa-eye"></i>
            </div>
            <h3 className="interest-title">Computer Vision</h3>
            <p className="interest-desc">
              Visual feature extraction, automated medical diagnostic imaging analysis, real-time object tracking, and CNN-driven pattern recognition.
            </p>
          </div>

          <div className="interest-card">
            <div className="interest-icon-box emerald-glow">
              <i className="fa-solid fa-microchip"></i>
            </div>
            <h3 className="interest-title">IoT & Embedded Systems</h3>
            <p className="interest-desc">
              Building interconnected smart sensor networks using ESP32, MQTT protocols, edge computing, and real-time remote telemetry pipelines.
            </p>
          </div>

          <div className="interest-card">
            <div className="interest-icon-box violet-glow">
              <i className="fa-solid fa-robot"></i>
            </div>
            <h3 className="interest-title">Robotics & Automation</h3>
            <p className="interest-desc">
              Exploring kinematic control, autonomous sensor-guided navigation, actuator feedback loops, and intelligent robotic system integration.
            </p>
          </div>

          <div className="interest-card">
            <div className="interest-icon-box blue-glow">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <h3 className="interest-title">Flutter & Mobile Ecosystems</h3>
            <p className="interest-desc">
              Architecting fluid 60fps cross-platform mobile apps with clean state management, modular Clean Architecture, and offline-first databases.
            </p>
          </div>

          <div className="interest-card">
            <div className="interest-icon-box amber-glow">
              <i className="fa-solid fa-code-compare"></i>
            </div>
            <h3 className="interest-title">Competitive Programming & Research</h3>
            <p className="interest-desc">
              Honing problem-solving agility with algorithmic challenges, graph theory, dynamic programming, and conducting empirical CSE research.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
