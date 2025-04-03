import logo from "./logo.png";
import project from "./project1.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiExpress,
  SiFigma,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiSvelte,
  SiSass,
  SiFlutter,
  SiCplusplus,
  SiCsharp,
} from "react-icons/si";

import "./App.css";
import MouseTracker from "./useParallax.js";
import AboutSection from "./About.js";
import ContactForm from "./Contact";
import Card from "./Card.js";
function App() {
  let text1 =
    "A job portal website made using vanilla JS, Html, CSS and Firebase. The purpose of the website is to collect CV of job seekers and available jobs from recruiters and connect the both according to the recruiter's requirements and available candidate for the job";
  return (
    <div className="">
      <nav className="navbar  navbar-expand-xl">
        <div className="container-fluid">
          <a className="logotext me-auto" href="/">
            <img src={logo} /> Rehaan Zaheer
          </a>

          <div
            className="sidebar offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header ">
              <h5 className="offcanvas-title " id="offcanvasNavbarLabel">
                Navigation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link mx-lg-5" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-5" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-5" aria-current="page" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-5" aria-current="page" href="#">
                    Skills
                  </a>
                </li>
              </ul>

              <div></div>
            </div>
          </div>
          <a href="" className="conbtn">
            Contact Me!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <MouseTracker />
      <AboutSection />
        <h1 className="text-center skillsText">My Skillset</h1>
      <div className="row skillSet">
        <div className="col-2">
          <Card icon={FaHtml5} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={FaJsSquare} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiTypescript} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiCplusplus} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiCsharp} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={FaPython} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={FaReact} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiSvelte} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiFlutter} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={FaNodeJs} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiExpress} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={FaBootstrap} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiSass} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={FaCss3Alt} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiFirebase} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiMongodb} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiMysql} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiSqlite} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiFigma} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={FaGithub} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={FaGit} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={FaNpm} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiAdobephotoshop} iconClass="icon" />
        </div>
        <div className="col-2">
          <Card icon={SiAdobelightroom} iconClass="icon" />
        </div>
          
        </div>
        <div className="projects row">
          <h1 className="proHeading text-center">Portfolio</h1>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <Card imageSrc={project} description={text1} newClass="proCard1" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <Card imageSrc={project} description={text1} newClass="proCard1" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <Card imageSrc={project} description={text1} newClass="proCard1" />
          </div>
      </div>
        <div className="row Contact">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1>Contact Us</h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ContactForm />
            </div>
          </div>
    </div>
    
  );
}

export default App;
