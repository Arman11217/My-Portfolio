"use client";
import React from "react";

export default function About() {
  return (
    <>
      <section className="section about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">WHO I AM</span>
          <h2 className="section-title">Bridging Code, Hardware, and <span className="gradient-text">Artificial Intelligence</span></h2>
          <div className="header-line"></div>
        </div>

        <div className="about-grid">
          <div className="about-card story-card">
            <div className="card-icon-bubble"><i className="fa-solid fa-user-astronaut"></i></div>
            <h3 className="card-title">My Journey & Passion</h3>
            <p>
              I am a dedicated <strong>Computer Science & Engineering student</strong> and software engineer with a strong enthusiasm for creating impactful digital solutions. I don't just write code; I architect systems that bridge the gap between high-level intelligence and physical hardware.
            </p>
            <p>
              From developing deep learning models for medical health prediction to building university-wide Learning Management Systems in <strong>Flutter</strong> and <strong>C# / .NET</strong>, my goal is to build scalable, fault-tolerant, and user-friendly software that solves real-world challenges.
            </p>
            <div className="key-facts">
              <div className="fact-item">
                <i className="fa-solid fa-graduation-cap"></i>
                <div>
                  <strong>Education</strong>
                  <p>B.Sc. in Computer Science & Engineering (PSTU)</p>
                </div>
              </div>
              <div className="fact-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <strong>Location</strong>
                  <p>Bangladesh (Open to Remote / Onsite)</p>
                </div>
              </div>
              <div className="fact-item">
                <i className="fa-solid fa-terminal"></i>
                <div>
                  <strong>Core Focus</strong>
                  <p>AI/ML, Flutter, .NET, IoT & Embedded Systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-highlights-wrapper">
            <div className="highlight-box">
              <div className="highlight-icon"><i className="fa-solid fa-brain"></i></div>
              <div className="highlight-text">
                <h4>Applied AI & Machine Learning</h4>
                <p>Developing CNN architectures and predictive healthcare pipelines using TensorFlow and Keras.</p>
              </div>
            </div>

            <div className="highlight-box">
              <div className="highlight-icon"><i className="fa-solid fa-layer-group"></i></div>
              <div className="highlight-text">
                <h4>Full-Stack & Cross-Platform</h4>
                <p>Crafting performant mobile apps with Flutter, web APIs with FastAPI & ASP.NET, and reactive frontends.</p>
              </div>
            </div>

            <div className="highlight-box">
              <div className="highlight-icon"><i className="fa-solid fa-microchip"></i></div>
              <div className="highlight-text">
                <h4>IoT & Edge Intelligence</h4>
                <p>Integrating ESP32, Arduino, Raspberry Pi, and bio-sensors with cloud databases and live web telemetry.</p>
              </div>
            </div>

            <div className="highlight-box">
              <div className="highlight-icon"><i className="fa-solid fa-trophy"></i></div>
              <div className="highlight-text">
                <h4>Competitive Mindset & Research</h4>
                <p>Sharpening algorithms through competitive programming and actively contributing to academic research.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
