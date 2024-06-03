import React, { useState, useEffect } from 'react';
import bg1 from "./bg1.png";
import bg2 from "./bg3.png";
import hero1 from "./hero2.png";
import hero2 from "./hero3.png";
import hero3 from "./hero5.png";
import hero4 from "./hero6.png";
import hero5 from "./hero7.png";
import hero6 from "./hero8.png";
import hero7 from "./hero9.png";
import hero8 from "./hero10.png";
import hero9 from "./hero11.png";
import hero10 from "./hero12.png";
const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const heroElement = document.querySelector('.hero');
      if (heroElement) {
        const { clientX, clientY } = event;
        const rect = heroElement.getBoundingClientRect();
        const centerX = rect.left - rect.width / 2;
        const centerY = rect.top - rect.height / 2;

        setMousePosition({
          x: clientX + centerX,
          y: clientY + centerY,

        });
      }console.log(MouseTracker)
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxStyles = (depth) => {
    return {
      transform: `translate(${mousePosition.x * depth}px, ${mousePosition.y * depth}px)`,
    };
  };

  return (
    <div className="hero">
      <img src={bg1} alt="" className="parallax bg1" style={parallaxStyles(0.0)} />
      <img src={bg2} alt="" className="parallax bg2" style={parallaxStyles(0.00)} />
      <img src={bg2} alt="" className="parallax bg3" style={parallaxStyles(0.06)} />
      <img src={hero1} alt="" className="parallax hero1" style={parallaxStyles(0.08)} />
      <img src={hero2} alt="" className="parallax hero2" style={parallaxStyles(0.1)} />
      <img src={hero3} alt="" className="parallax hero3" style={parallaxStyles(0.12)} />
      <img src={hero4} alt="" className="parallax hero4" style={parallaxStyles(0.14)} />
      {/* <div className="textbox parallax" style={parallaxStyles(0.16)}>
        <h1 className="text parallax" style={parallaxStyles(0.18)}>Some very amazing text</h1>
        <h2 className="text parallax" style={parallaxStyles(0.2)}>Some very amazing text</h2>
      </div> */}
      <img src={hero5} alt="" className="parallax hero5" style={parallaxStyles(0.22)} />
      <img src={hero6} alt="" className="parallax hero6" style={parallaxStyles(0.24)} />
      <img src={hero7} alt="" className="parallax hero7" style={parallaxStyles(0.26)} />
      <img src={hero8} alt="" className="parallax hero8" style={parallaxStyles(0.28)} />
      <img src={hero9} alt="" className="parallax hero9" style={parallaxStyles(0.3)} />
      <img src={hero10} alt="" className="parallax hero10" style={parallaxStyles(0.32)} />
    </div>
  );
};

export default MouseTracker;
