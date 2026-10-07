"use client";
import React from "react";

export default function Modals() {
  return (
    <>
      <div className="modal-backdrop" id="resumeModal">
    <div className="modal-dialog">
      <div className="modal-header">
        <div className="modal-title-box">
          <i className="fa-solid fa-file-invoice modal-icon"></i>
          <div>
            <h3>Arman Hossain — Curriculum Vitae</h3>
            <span className="modal-subtitle">Computer Science & Engineering Student | Software Engineer</span>
          </div>
        </div>
        <button className="modal-close-btn" id="closeResumeModal">&times;</button>
      </div>
      <div className="modal-body resume-preview-body">
        <div className="cv-paper">
          <div className="cv-header">
            <div>
              <h2>Arman Hossain</h2>
              <p className="cv-role">Computer Science & Engineering Student | Software Engineer</p>
            </div>
            <div className="cv-contact-col">
              <p><i className="fa-solid fa-envelope"></i> ahrashel1213@gmail.com</p>
              <p><i className="fa-solid fa-phone"></i> +880 1793-543783</p>
              <p><i className="fa-brands fa-linkedin"></i> linkedin.com/in/arman-hossain-59656932a</p>
              <p><i className="fa-brands fa-github"></i> github.com/Arman11217</p>
            </div>
          </div>

          <div className="cv-section">
            <h4 className="cv-section-title">EDUCATION</h4>
            <div className="cv-item">
              <div className="cv-item-header">
                <strong>B.Sc. in Computer Science & Engineering</strong>
                <span>Undergraduate</span>
              </div>
              <p className="cv-org">Patuakhali Science and Technology University (PSTU)</p>
            </div>
          </div>

          <div className="cv-section">
            <h4 className="cv-section-title">TECHNICAL SKILLS</h4>
            <p><strong>Languages:</strong> C, C++, Python, Java, JavaScript, Dart, PHP, C#</p>
            <p><strong>Frameworks:</strong> Flutter, FastAPI, ASP.NET, React</p>
            <p><strong>AI & ML:</strong> TensorFlow, Keras, CNN, Machine Learning, Computer Vision</p>
            <p><strong>Databases:</strong> MySQL, SQL Server, Oracle, Firestore</p>
            <p><strong>IoT / Hardware:</strong> ESP32, Arduino, Raspberry Pi, Bio/Environmental Sensors</p>
            <p><strong>Tools:</strong> Git, GitHub, VS Code, Android Studio</p>
          </div>

          <div className="cv-section">
            <h4 className="cv-section-title">NOTABLE PROJECTS</h4>
            <div className="cv-item">
              <div className="cv-item-header">
                <strong>VitalSense — AI-Powered Remote Health Monitoring App</strong>
                <a href="https://github.com/Arman11217/VitalSense-AI-Powered-Remote-Health-Monitoring-App.git" target="_blank">GitHub</a>
              </div>
              <p>IoT bio-telemetry system integrated with deep neural networks for early disease anomaly detection.</p>
            </div>
            <div className="cv-item">
              <div className="cv-item-header">
                <strong>PSTU Blended Learning Center (Flutter App & .NET)</strong>
                <a href="https://github.com/Arman11217/PSTU-Blended-Learning-Center-Flutter-App.git" target="_blank">GitHub</a>
              </div>
              <p>University-grade digital learning platform across Flutter mobile and enterprise C# .NET architecture.</p>
            </div>
            <div className="cv-item">
              <div className="cv-item-header">
                <strong>ElektroVote — Secure Digital Voting Platform</strong>
                <a href="https://github.com/Arman11217/ElektroVote.git" target="_blank">GitHub</a>
              </div>
              <p>Cryptographically secured voting application ensuring election transparency and real-time tallying.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn btn-secondary" onClick={() => window.print()}>
          <i className="fa-solid fa-print"></i> Print / Save as PDF
        </button>
        <a href="mailto:ahrashel1213@gmail.com?subject=Resume%20Request%20for%20Arman%20Hossain" className="btn btn-primary">
          <i className="fa-solid fa-envelope"></i> Request Updated PDF via Email
        </a>
      </div>
    </div>
  </div>

  {/* CERTIFICATE LIGHTBOX MODAL */}
  <div className="modal-backdrop" id="certModal">
    <div className="modal-dialog cert-modal-dialog">
      <div className="modal-header">
        <h3 id="certModalTitle">Certificate Preview</h3>
        <button className="modal-close-btn" onClick={() => closeCertModal()}>&times;</button>
      </div>
      <div className="modal-body cert-modal-body">
        <img src={undefined} alt="Certificate Preview" id="certModalImg" />
      </div>
    </div>
  </div>
    </>
  );
}
