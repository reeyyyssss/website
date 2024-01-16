import React from 'react';

export default function AboutMe() {
  const sectionStyle = {
    backgroundColor: '#704D2E', // Light gray background color
  };

  return (
    <section id="AboutMe" className="about--section" style={sectionStyle}>
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">Myself</h1>
          <p className="hero--section-description">
            I am a talented and versatile individual who possesses the ability to sing and dance with passion and skill. My caring and loving nature is reflected in my interactions with others, and I am always seen with a warm and inviting smile. Beyond my artistic talents, I am driven by a strong desire to expand my knowledge, particularly in the realm of programming languages. I am enthusiastic about learning and am committed to honing my skills to pave the way for a successful transition into the world of technology. Ultimately, my goal is to become a project manager, where I can combine my artistic sensibilities with my growing technical expertise to lead and execute successful projects.
          </p>
          <p className="hero--section-description">
            {/* Additional paragraph if needed */}
          </p>
        </div>
      </div>
    </section>
  );
}
