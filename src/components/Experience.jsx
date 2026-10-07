"use client";
import React from "react";

export default function Experience() {
  return (
    <>
      <section className="section certificates-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">CREDENTIALS & EXPERIENCE</span>
          <h2 className="section-title">Certifications & <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle">Validated skills and milestones in software engineering, machine learning, and academic excellence.</p>
          <div className="header-line"></div>
        </div>

        <div className="certificates-grid">
          <div className="certificate-card">
            <div className="cert-img-box">
              <img src="assets/images/certificate-1.jpg" alt="Applied AI & Deep Learning Certification" className="cert-img" />
              <div className="cert-zoom-btn" onClick={() => openCertModal('assets/images/certificate-1.jpg', 'Applied AI & Deep Learning Certification')}>
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </div>
            </div>
            <div className="cert-info">
              <span className="cert-issuer"><i className="fa-solid fa-award"></i> Professional Credential</span>
              <h4 className="cert-title">Applied AI & Deep Learning Systems</h4>
              <p className="cert-meta">Verified training in neural network architectures, CNNs, and predictive modeling pipelines.</p>
            </div>
          </div>

          <div className="certificate-card">
            <div className="cert-img-box">
              <img src="assets/images/certificate-2.jpg" alt="Cross-Platform Software Engineering Certification" className="cert-img" />
              <div className="cert-zoom-btn" onClick={() => openCertModal('assets/images/certificate-2.jpg', 'Advanced Software Engineering & Mobile App Development')}>
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </div>
            </div>
            <div className="cert-info">
              <span className="cert-issuer"><i className="fa-solid fa-graduation-cap"></i> Academic & Technical</span>
              <h4 className="cert-title">Cross-Platform Software Engineering</h4>
              <p className="cert-meta">Excellence in building cross-platform applications with Flutter, Dart, REST APIs, and backend architectures.</p>
            </div>
          </div>

          <div className="certificate-card add-cert-card">
            <div className="add-cert-content">
              <i className="fa-solid fa-file-circle-plus"></i>
              <h4>Your Future Certificates</h4>
              <p>Place your certificate images in <code>assets/images/</code> to showcase your achievements here.</p>
              <span className="upload-hint">Customizable in HTML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
