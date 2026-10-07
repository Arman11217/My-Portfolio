"use client";
import React, { useState } from "react";
import CoolSlideGallery from "./lightswind/cool-slide-gallery";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const gallerySlides = [
    {
      src: "assets/images/vitalsense_mockup.jpg",
      title: "VitalSense",
      subtitle: "Remote Health Monitoring",
      //badge: "Featured AI/IoT",
    },
    {
      src: "assets/images/user_pblc_app.jpg",
      title: "PSTU Blended Learning Center App",
      subtitle: "Blended Learning App",
      //badge: "PSTU Official",
    },
    {
      src: "assets/images/user_pblc_web.png",
      title: "PSTU Blended Learning Center Web",
      subtitle: "Enterprise Blended Learning Platform",
      //badge: "C# .NET",
    },
    {
      src: "assets/images/user_elektrovote.png",
      title: "ElektroVote",
      subtitle: "Secure Voting Platform",
      //badge: "Web Security",
    },
    {
      src: "assets/images/shebabondhu_mockup.jpg",
      title: "ShebaBondhu",
      subtitle: "Smart Personal Assistant",
      //badge: "Utility",
    },
  ];

  return (
    <>
      <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">MY CREATIONS</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">Real-world applications spanning AI-assisted healthcare, university management systems, digital democracy, and personal assistants.</p>
          <div className="header-line"></div>
        </div>

        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '3rem', marginTop: '1.5rem', paddingLeft: '4rem' }}>
          <CoolSlideGallery
            slides={gallerySlides}
            cardWidth={680}
            cardHeight={370}
            showTitle={true}
            showArrows={true}
            showDots={true}
            draggable={true}
            autoplay={true}
            autoplayDelay={3}
            easing="smooth"
            gap={6}
            depth={150}
            maxVisible={2}
          />
        </div>

        {/* Compact Projects Grid */}
        <div className="compact-projects-container">
          <div className="compact-projects-grid">
            {[
              {
                id: 1,
                title: "VitalSense",
                img: "assets/images/vitalsense_grid_mockup.jpg",
                link: "https://github.com/Arman11217/VitalSense-AI-Powered-Remote-Health-Monitoring-App.git",
                liveLink: "#"
              },
              {
                id: 2,
                title: "PSTU Mobile",
                img: "assets/images/pstu_mobile_grid_mockup.jpg",
                link: "https://github.com/Arman11217/PSTU-Blended-Learning-Center-Flutter-App.git",
                liveLink: "#"
              },
              {
                id: 3,
                title: "PSTU Web",
                img: "assets/images/pstu_web_grid_mockup.jpg",
                link: "https://github.com/Arman11217/Blended-Learning-Center.git",
                liveLink: "#"
              },
              {
                id: 4,
                title: "ElektroVote",
                img: "assets/images/elektrovote_grid_mockup.jpg",
                link: "https://github.com/Arman11217/ElektroVote.git",
                liveLink: "#"
              },
              {
                id: 5,
                title: "ShebaBondhu",
                img: "assets/images/shebabondhu_grid_mockup.jpg",
                link: "https://github.com/Arman11217/ShebaBondhu-Personal-Assistant-App.git",
                liveLink: "#"
              },
              {
                id: 6,
                title: "Nexus ERP",
                img: "assets/images/nexus_erp_grid_mockup.jpg",
                link: "#",
                liveLink: "#"
              },
              {
                id: 7,
                title: "ResumAI",
                img: "assets/images/ai_resume_grid_mockup.jpg",
                link: "#",
                liveLink: "#"
              },
              {
                id: 8,
                title: "Nova Wallet",
                img: "assets/images/crypto_wallet_grid_mockup.jpg",
                link: "#",
                liveLink: "#"
              }
            ].slice(0, showAll ? 8 : 6).map((proj) => (
              <div className="compact-project-card" key={proj.id}>
                <div className="cp-image-wrapper">
                  <img src={proj.img} alt={proj.title} />
                  
                  {/* Bottom Gradient overlay to make text visible */}
                  <div className="cp-overlay-gradient"></div>

                  {/* Project Name - Bottom Left */}
                  <h3 className="cp-name-bottom-left">{proj.title}</h3>

                  {/* Hover Actions */}
                  <div className="cp-hover-actions">
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="cp-action-btn github-btn">
                      <i className="fa-brands fa-github"></i> Source Code
                    </a>
                    
                    <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="cp-action-btn live-btn">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="see-more-container">
            <button className="see-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? (
                <>See Less <i className="fa-solid fa-chevron-up"></i></>
              ) : (
                <>See More <i className="fa-solid fa-chevron-down"></i></>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

