import "./style.css";

function NavBar() {
  return (
    <header className="header">
      <h1>
        Ryan{" "}
        <span id="bit-logo">
          <span>&#x20BF;</span>
        </span>
        risch
      </h1>
      <nav>
        <ul className="navbarLinks">
          <li className="navItem">
            <a href="#about"> About Me</a>
          </li>
          <li className="navItem">
            <a href="#work">Work</a>
          </li>
          <li className="navItem">
            <a href="#contact">Contact Me</a>
          </li>
          <li className="navItem">
            <a href="Resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
