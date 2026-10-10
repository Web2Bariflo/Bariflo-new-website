import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiTargetLock, BiBrain, BiCaretLeft } from 'react-icons/bi';
import { TbTargetArrow } from "react-icons/tb";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const navigate = useNavigate();

  const heroImages = [
    "/images/industrial_bg.jpg",
    "/images/aquaculture_cages.jpg",
    "/images/rectangular_ponds.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    { icon: <img src="/images/icon-sense.png" alt="Sense" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />, title: 'SENSE', desc: 'Continuous data\nfrom every asset' },
    { icon: <img src="/images/icon-understand.png" alt="Cognition" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />, title: 'COGNITION', desc: '' },
    { icon: <img src="/images/icon-act.png" alt="Act" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />, title: 'ACT', desc: 'Autonomous actions\nin real time' },
  ];

  return (
    <section className="nl-hero">
      <div className="nl-hero-main-bg">
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            className={`nl-hero-main-bg-img ${bgIndex === index ? 'active' : ''}`}
            alt="Hero Background"
          />
        ))}
      </div>

      <div className="nl-hero-content">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            deleteSpeed: 20,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<div class="nl-hero-subtitle">COGNITIVE INFRASTRUCTURE FOR WATER</div>')
              .pauseFor(400)
              .typeString('<h1 class="nl-hero-title">BUILDING <br /> <span style="color: #0066CC">COGNIZANCE</span> <br /> FOR WATER</h1>')
              .pauseFor(400)
              .typeString('<p class="nl-hero-desc">We transform industrial water systems into self-learning cyber-physical ecosystems that sense, decide, act and continuously optimize every drop.</p>')
              .pauseFor(5000)
              .deleteAll()
              .start();
          }}
        />
      </div>

      <div className="nl-hero-bg">
        <img src="/?v=6" alt="Cybernetic Water AI" />
      </div>

      <div className="nl-hero-cards">
        {cards.map((card, index) => (
          <div className="nl-feature-card" key={index} onClick={() => { if (card.title === 'SENSE') navigate('/sense-aquaculture'); }}>
            <img 
              src="/images/images.png" 
              alt="Click to redirect" 
              className="nl-hand-icon"
            />
            <div className="nl-feature-icon">{card.icon}</div>
            <div className="nl-feature-text">
              <h4>{card.title}</h4>
              {card.desc && <p>{card.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
