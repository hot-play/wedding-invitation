import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay">
        <div className="names-container">
          <div className="name name-first">Данил</div>
          <div className="ampersand">&</div>
          <div className="name name-second">Анастасия</div>
        </div>
        <div className='hero-date'>
          06.06.2026
        </div>
      </div>
    </section>
  );
};

export default Hero;