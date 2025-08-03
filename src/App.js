import useScrollAnimation from "./Animate.js";
import project1 from "./project1.png";
import project2 from "./Bt.png";
import project3 from "./GL.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
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
import FlowingMenu from "./Flowingmenu.js";
import "./index.css";
import MouseTracker from "./useParallax.js";
import AboutSection from "./About.js";
import ContactForm from "./Contact.js";
import Card from "./Card.js";
import Footer from "./Footer.js";
import Navbar from "./navbar.js";
import InfiniteMenu from "./InfiniteMenu";
import { EmblaCarousel } from "./Testimonials";

function App() {
  let text1 =
    "A job portal website made using vanilla JS, Html, CSS and Firebase. The purpose of the website is to collect CV of job seekers and available jobs from recruiters and connect the both according to the recruiter's requirements and available candidate for the job";
  let text2 =
    "A website template made for appointment based businesses in NEXTjs 15, with a dashboard to view and manage appointments. intergated with Stripe for subscriptions and twillio for SMS updates on appointment status to customers.";
  let text3 =
    "A web browser extention specifically made for google maps to scrape publically available data on businesses and shops listed on google maps according to searched catagory. Once scrapping is done download the data as a CSV file.";
  const addElement = useScrollAnimation();
  const demoItems = [
    {
      link: "#",
      text: "CRM SYSTEMS",
      image:
        "https://plus.unsplash.com/premium_photo-1683133974170-762dc561d292?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "#",
      text: "Appointment SYSTems",
      image:
        "https://images.unsplash.com/photo-1703300450387-047da16a89c4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "#",
      text: "Android apps",
      image:
        "https://images.unsplash.com/photo-1612442443556-09b5b309e637?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      link: "#",
      text: "Custom websites",
      image:
        "https://images.unsplash.com/photo-1648134859177-66e35b61e106?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "#",
      text: "Agentic AI(coming soon)",
      image:
        "https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];

  return (
    <div className="body">
      <Navbar />
      <div
        className="sectinpm help
      on"
        id="home"
      >
        <MouseTracker />
      </div>
      <div className="section" id="about">
        <AboutSection />
      </div>
      <h1
        className="hidden text-center skillsText  "
        data-animation="show"
        ref={addElement}
        id="skills"
      >
        Experts In
      </h1>
      <div className="row  justify-content-center skillSet">
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12  hidden"
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaHtml5} iconClass="icon" />
        </div>

        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaJsSquare} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiTypescript} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiCplusplus} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiCsharp} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaPython} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaReact} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiSvelte} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiFlutter} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaNodeJs} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiExpress} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaBootstrap} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiSass} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaCss3Alt} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiFirebase} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiMongodb} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiMysql} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiSqlite} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiFigma} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaGithub} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaGit} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={FaNpm} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiAdobephotoshop} iconClass="icon" />
        </div>
        <div
          className="col-xl-2 col-lg-3 d-flex justify-content-center align-items-center col-md-4 col-sm-6 col-xs-12 hidden  "
          data-animation="show"
          ref={addElement}
        >
          <Card icon={SiAdobelightroom} iconClass="icon" />
        </div>
      </div>

      <div data-animation="show" ref={addElement}>
        <h1
          className="hidden text-center skillsText  "
          data-animation="show"
          ref={addElement}
          id="Testimonials"
        >
          Testimonials
        </h1>
       <div>
        <EmblaCarousel/>
        </div>
      </div>
      <div
        className="projects row hidden  "
        data-animation="show"
        ref={addElement}
      >
        <h1 id="portfolio" className="proHeading text-center">
          Open Source Products
        </h1>
        <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
          <a href="https://www.sub-it.net/" className="tags">
            <Card imageSrc={project1} description={text1} newClass="proCard1" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
          <a
            href="https://github.com/Ray-Kadmis/Business-Website-Template"
            className="tags"
          >
            <Card imageSrc={project2} description={text2} newClass="proCard1" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
          <a
            href="https://github.com/Ray-Kadmis/Google-Map-Web-Scrapper"
            className="tags"
          >
            <Card imageSrc={project3} description={text3} newClass="proCard1" />
          </a>
        </div>
      </div>

      <div
        className="projects row hidden  "
        data-animation="show"
        ref={addElement}
      >
        <h1 id="products" className="proHeading text-center">
          Services
        </h1>
        <div style={{ height: "600px", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>
      </div>
      <div className="row Contact">
        <div
          className="col-lg-6 col-md-12 col-sm-12 hidden"
          data-animation="show"
          ref={addElement}
        >
          <h1 id="contact" className="contactText">
            Get In Touch, And Let's Create Something Amazing Together!
          </h1>
          <h4 className="contactText2">
            If you've made it this far, you're probably thinking about what's
            possible and so are we. Whether you’re exploring a new idea, scaling
            an existing project, or just curious about how tech can solve your
            challenges, let’s connect. We’re not here to hard-sell — we’re here
            to understand, collaborate, and help you make smarter, bolder moves
            in the digital world. Drop us a message or on <b>+13073107240</b>,
            and we’ll set up a free video call to learn more about your goals
            and share how we can help. No pressure, just possibilities.
            <br /> <b>Let’s build something exceptional — together.</b>
          </h4>
          {/* <h6 className="contactText3">
            Are you a recruiter?{" "}
            <a href="RehanCV.pdf" download="RehanCV.pdf">
              <button>Download CV</button>
            </a>
          </h6> */}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
