"use client";
import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", subtitle: "AI, Data" },
      { name: "C / C++", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", subtitle: "DSA" },
      { name: "C#", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", subtitle: ".NET" },
      { name: "JavaScript", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", subtitle: "Web" },
      { name: "Dart", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg", subtitle: "Flutter" },
      { name: "PHP", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", subtitle: "Backend" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Flutter", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", subtitle: "Mobile Apps" },
      { name: "FastAPI", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", subtitle: "REST APIs" },
      { name: "ASP.NET", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg", subtitle: "Enterprise" },
      { name: "React", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", subtitle: "Web SPAs" },
      { name: "TensorFlow", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", subtitle: "Deep Learning" }
    ]
  },
  {
    title: "Databases & Hardware",
    skills: [
      { name: "MySQL", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", subtitle: "Relational DB" },
      { name: "Firebase", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg", subtitle: "NoSQL Sync" },
      { name: "Git", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", subtitle: "Version Control" },
      { name: "ESP32", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg", subtitle: "IoT Boards" },
      { name: "Raspberry Pi", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg", subtitle: "Edge Computing" }
    ]
  }
];

const CARD_WIDTH = 130;
const CARD_HEIGHT = 140;
const CARD_GAP = 40;
const SAG = 55;         // max sag at center in px
const STRING_Y = 24;    // y from top of wrapper where string lives

function HangingRow({ category }) {
  const total = category.skills.length;
  const totalWidth = total * CARD_WIDTH + (total - 1) * CARD_GAP;
  const wrapperHeight = STRING_Y + SAG + CARD_HEIGHT + 30; // total height of row

  // Parabola: y = a*x^2, where at x=totalWidth/2, y = SAG
  // a = SAG / (totalWidth/2)^2
  const halfW = totalWidth / 2;
  const a = SAG / (halfW * halfW);

  const cards = category.skills.map((skill, i) => {
    // Center of each card x
    const cardCenterX = i * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH / 2;
    const xRelCenter = cardCenterX - halfW; // relative to center
    const sagY = a * xRelCenter * xRelCenter; // parabola value: 0 at center, SAG at edges

    // Rope y at this card's x position
    // bezier passes through (halfW, STRING_Y+SAG) exactly with ctrl at STRING_Y+2*SAG
    const ropeY = STRING_Y + (SAG - sagY); // y on rope where clip hooks

    // Clip is 14px tall, sits above card top. Its center (the hook) is at ~7px from its top.
    // Card top = ropeY - clip_offset_above_card (14px clip top, rope hooks midway through clip ~7px)
    const CLIP_ABOVE = 7; // rope passes through 7px from top of clip
    const CLIP_HEIGHT = 20; // total clip protrudes above card by this much
    const cardTop = ropeY - CLIP_ABOVE;

    // Natural rotation: tangent of parabola slope
    const slope = 2 * a * xRelCenter;       // dy/dx at this x
    const angleDeg = Math.atan(slope) * (180 / Math.PI) * 0.6; // soften by 60%

    const cardLeft = i * (CARD_WIDTH + CARD_GAP);

    return { skill, cardLeft, cardTop, ropeY, angleDeg, cardCenterX };
  });

  // CORRECT quadratic bezier: to pass through (halfW, STRING_Y+SAG) at t=0.5,
  // the control point must be at (halfW, STRING_Y + 2*SAG)
  const ctrlY = STRING_Y + 2 * SAG;
  const svgPathD = `M 0,${STRING_Y} Q ${halfW},${ctrlY} ${totalWidth},${STRING_Y}`;

  return (
    <div className="skills-category-row">
      <h3 className="skills-category-title">{category.title}</h3>
      <div className="skills-scroll-outer">
        <div
          className="hanging-row-inner"
          style={{ width: `${totalWidth}px`, height: `${wrapperHeight}px` }}
        >
          {/* Realistic rope SVG — jute/hemp style */}
          <svg
            className="rope-svg"
            width={totalWidth}
            height={wrapperHeight}
            viewBox={`0 0 ${totalWidth} ${wrapperHeight}`}
          >
            <defs>
              {/* Subtle grain filter for rope texture */}
              <filter id="rope-texture" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
                <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
                <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
                <feComposite in="blended" in2="SourceGraphic" operator="in" />
              </filter>
            </defs>

            {/* 1. Soft drop shadow */}
            <path
              d={svgPathD} fill="none"
              stroke="rgba(0,0,0,0.15)" strokeWidth="3"
              strokeLinecap="round"
              transform="translate(0,3)"
              filter="url(#rope-texture)"
            />
            {/* 2. Rope body — dark base (shadow side) */}
            <path d={svgPathD} fill="none" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
            {/* 3. Rope body — mid emerald strand */}
            <path d={svgPathD} fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
            {/* 4. Rope body — light emerald highlight */}
            <path d={svgPathD} fill="none" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />
            {/* 5. Twisted fiber A — light diagonal dashes */}
            <path d={svgPathD} fill="none"
              stroke="rgba(167,243,208,0.6)" strokeWidth="0.8" strokeLinecap="round"
              strokeDasharray="4 4"
            />
            {/* 6. Twisted fiber B — dark diagonal dashes, offset for twist illusion */}
            <path d={svgPathD} fill="none"
              stroke="rgba(2,44,34,0.3)" strokeWidth="0.6"  strokeLinecap="round"
              strokeDasharray="4 4" strokeDashoffset="4"
            />
            {/* 7. Top sheen — thin white highlight */}
            <path d={svgPathD} fill="none"
              stroke="rgba(255,255,255,0.4)" strokeWidth="0.4" strokeLinecap="round"
            />

          </svg>

          {/* Cards absolutely positioned on the curve */}
          {cards.map(({ skill, cardLeft, cardTop, clipY, angleDeg, cardCenterX }) => (
            <div
              key={skill.name}
              className="hanging-card"
              style={{
                left: `${cardLeft}px`,
                top: `${cardTop}px`,
                // rotate from clip center = 7px above card top, horizontally centered
                transformOrigin: `${CARD_WIDTH / 2}px -7px`,
                transform: `rotate(${angleDeg}deg)`,
                "--rot": `${angleDeg}deg`,
              }}
            >
              {/* Clip pin */}
              <div className="hanging-card-clip"></div>
              {skill.imgSrc ? (
                <img src={skill.imgSrc} alt={skill.name} className="hanging-icon-img" />
              ) : (
                <i
                  className={`${skill.icon} hanging-icon`}
                  style={{ color: skill.color }}
                ></i>
              )}
              <div className="hanging-details">
                <span className="hanging-name">{skill.name}</span>
                <span className="hanging-subtitle">{skill.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <section className="section skills-section" id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">MY ARSENAL</span>
            <h2 className="section-title">Technical <span className="gradient-text">Proficiencies</span></h2>
            <p className="section-subtitle">
              Languages, frameworks, databases, and tools — all hanging on a string.
            </p>
            <div className="header-line"></div>
          </div>

          <div className="skills-wavy-container">
            {skillCategories.map((cat, i) => (
              <HangingRow key={i} category={cat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
