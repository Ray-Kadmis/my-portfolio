import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import portrait from "./me.jpg";

function AboutSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "UI/UX Designer",
        "Photographer",
        "Videographer",
        "AI Artist",
        "Content Writer",
        "Pookie (✿◡‿◡)",

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

  return (
    <div>
      <div className="row About">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row headings">
          <h1>
            I'm Rehan Your Favourite <br />
            <span ref={el} />
          </h1>
          <h4>Welcome to my portfolio, where bugs are slayed, beautiful designs are made, and creativity reigns supreme!
          </h4>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 imgDiv">
          <img className="meImg img-fluid" src={portrait} alt="Portrait" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
