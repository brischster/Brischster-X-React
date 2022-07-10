import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../src/Assets/187161.webp";
import { Outlet, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <header className="header">
          <h1>
            Ryan{" "}
            <span id="bit-logo">
              <span>₿</span>
            </span>
            risch
          </h1>
          {/* Navigation Bar */}
          <nav>
            <ul className="navbar-links">
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "red" : "",
                    };
                  }}
                  to="/about"
                >
                  {" "}
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "red" : "",
                    };
                  }}
                  to="/projects"
                >
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "red" : "",
                    };
                  }}
                  to="/form"
                >
                  Contact Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "red" : "",
                    };
                  }}
                  to="/resume"
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className="background-image">
          <img
            src={banner}
            alt="greenbtc"
            style={{ width: "100%" }}
            height={150}
          />
          <span className="slogan">
            <h2>Heal the World with Orange Pills and Software</h2>
          </span>
        </div>
        <main className="content" />
        {/* <Link to="/projects">Work</Link> */}
      </div>
      <Outlet />
      {/* <About /> */}
      {/* <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/projects">Projects</Link> */}
      {/* <BodyCard />
      <Footer /> */}

      {/* <Outlet /> */}
      {/* </nav> */}
    </>
  );
}

export default App;
