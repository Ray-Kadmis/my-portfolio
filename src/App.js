import logo from "./logo.png";
// import bg1 from "./bg1.png";
// import bg2 from "./bg3.png";
// import hero1 from "./hero2.png";
// import hero2 from "./hero3.png";
// import hero3 from "./hero5.png";
// import hero4 from "./hero6.png";
// import hero5 from "./hero7.png";
// import hero6 from "./hero8.png";
// import hero7 from "./hero9.png";
// import hero8 from "./hero10.png";
// import hero9 from "./hero11.png";
// import hero10 from "./hero12.png";
import "./App.css";
import MouseTracker from "./useParallax.js";

function App() {
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
      
       {/* <div className="hero">
        <img src={bg1} alt="" className="parallax bg1" />
        <img src={bg2} alt="" className="parallax bg2" />
        <img src={bg2} alt="" className="parallax bg3" />
        <img src={hero1} alt="" className="parallax hero1" />
        <img src={hero2} alt="" className="parallax hero2" />
        <img src={hero3} alt="" className="parallax hero3" />
        <img src={hero4} alt="" className="parallax hero4" />
        <div className="textbox parallax">
          <h1 className="text parallax">Some very amazing text</h1>
          <h2 className="text parallax">Some very amazing text</h2>
        </div>
        <img src={hero5} alt="" className="parallax hero5" />
        <img src={hero6} alt="" className="parallax hero6" />
        <img src={hero7} alt="" className="parallax hero7" />
        <img src={hero8} alt="" className="parallax hero8" />
        <img src={hero9} alt="" className="parallax hero9" />
        <img src={hero10} alt="" className="parallax hero10" />
      </div>  */}

      <MouseTracker/>
    
    </div>
  );
}

export default App;



