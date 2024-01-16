import React from 'react';

export default function HeroSection() {
  const sectionStyle = {
    backgroundColor: '#BD8D63', 
  };

  return (
    <section id="heroSection" className="hero--section" style={sectionStyle}>
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Yow, I'm Irish Mae P. Lagoy</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front - end</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            As a front-end developer, I specialize in creating visually appealing and user-friendly interfaces for websites and applications. My expertise lies in translating design concepts into seamless and interactive user experiences, utilizing a combination of HTML, CSS, and JavaScript to bring a compelling and responsive digital presence to life.
            <br />
          </p>
        </div>
        <button className="btn btn-primary">Know more about me?</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
