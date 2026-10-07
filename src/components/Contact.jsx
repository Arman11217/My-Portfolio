"use client";
import React from "react";

export default function Contact() {
  return (
    <>
      <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">GET IN TOUCH</span>
          <h2 className="section-title">Let's Connect & <span className="gradient-text">Collaborate</span></h2>
          <p className="section-subtitle">Whether you have an exciting software project, research opportunity, or just want to discuss tech — my inbox is always open!</p>
          <div className="header-line"></div>
        </div>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info-column">
            <div className="contact-channel-card">
              <div className="channel-icon"><i className="fa-solid fa-envelope"></i></div>
              <div className="channel-body">
                <span className="channel-label">Email Me</span>
                <a href="mailto:ahrashel1213@gmail.com" className="channel-value">ahrashel1213@gmail.com</a>
              </div>
            </div>

            <div className="contact-channel-card">
              <div className="channel-icon whatsapp-icon"><i className="fa-brands fa-whatsapp"></i></div>
              <div className="channel-body">
                <span className="channel-label">WhatsApp (Instant Chat)</span>
                <a href="https://wa.me/8801793543783" target="_blank" rel="noopener noreferrer" className="channel-value">+880 1793-543783</a>
              </div>
            </div>

            <div className="contact-channel-card">
              <div className="channel-icon"><i className="fa-solid fa-phone"></i></div>
              <div className="channel-body">
                <span className="channel-label">Direct Phone</span>
                <a href="tel:01793543783" className="channel-value">01793-543783</a>
              </div>
            </div>

            <div className="contact-channel-card">
              <div className="channel-icon"><i className="fa-brands fa-linkedin-in"></i></div>
              <div className="channel-body">
                <span className="channel-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/arman-hossain-59656932a/" target="_blank" rel="noopener noreferrer" className="channel-value">arman-hossain-59656932a</a>
              </div>
            </div>

            <div className="contact-channel-card">
              <div className="channel-icon"><i className="fa-brands fa-github"></i></div>
              <div className="channel-body">
                <span className="channel-label">GitHub</span>
                <a href="https://github.com/Arman11217" target="_blank" rel="noopener noreferrer" className="channel-value">Arman11217</a>
              </div>
            </div>

            <div className="quick-contact-actions">
              <a href="https://wa.me/8801793543783" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-100">
                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-column">
            <form className="contact-form" id="contactForm">
              <h3 className="form-title">Send a Direct Message</h3>
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <div className="input-wrapper">
                  <i className="fa-solid fa-user input-icon"></i>
                  <input type="text" id="name" name="name" className="form-input" placeholder="e.g. John Doe" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <div className="input-wrapper">
                  <i className="fa-solid fa-envelope input-icon"></i>
                  <input type="email" id="email" name="email" className="form-input" placeholder="e.g. john@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <div className="input-wrapper">
                  <i className="fa-solid fa-tag input-icon"></i>
                  <input type="text" id="subject" name="subject" className="form-input" placeholder="e.g. Project Inquiry or Collaboration" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <div className="input-wrapper">
                  <i className="fa-solid fa-comment-dots input-icon textarea-icon"></i>
                  <textarea id="message" name="message" className="form-input form-textarea" rows="5" placeholder="Write your message here..." required></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-submit w-100" id="submitBtn">
                <i className="fa-solid fa-paper-plane"></i>
                <span>Send Message</span>
              </button>

              <div className="form-feedback" id="formFeedback"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
