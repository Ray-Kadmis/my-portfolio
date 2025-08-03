import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import portrait from "./vector.svg";
import useScrollAnimation from "./Animate.js";
import "./index.css";
function AboutSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "AI Experts",
        "CRM Developers",
        "Cloud Engineers",
        "Data Architects",
        "UI Designers",
        "UX Strategists",
        "Tech Partners",
        "Web Developers",
        "Digital Builders",
        "System Integrators",
        "Automation Gurus",
        "DevOps Pros",
        "Full Stack Experts",
      ],
      typeSpeed: 50,
      startDelay: 20,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    });

    // Cleanup the Typed instance on component unmount
  });
  const addElement = useScrollAnimation();
  return (
    <div className=" hidden  " data-animation="show" ref={addElement}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 textCon">
          <h1 className="aboutText1">
            We are Raypath LLC Your Favourite <br />
            <span ref={el} />
          </h1>
          <h4 className="aboutText2">
            Welcome to Raypath LLC, your Digital path to success. For the past 5
            years, we've been crafting digital solutions that help businesses
            thrive in an ever-evolving online world. From stunning websites and
            immersive 3D experiences to intelligent AI-powered tools and sleek
            dashboards, we build the future — today.
            <br /> Our team has had the privilege of working with a wide range
            of satisfied clients, delivering everything from custom CRMs and
            smart agentic AI tools (coming soon) to powerful browser extensions
            and streamlined web platforms. Whether you're looking to establish
            your digital presence or supercharge your business with the latest
            in AI and web technology — you're in the right place.
          </h4>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 imgDiv">
          <img className="meImg img-fluid" src={portrait} alt="Portrait" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
