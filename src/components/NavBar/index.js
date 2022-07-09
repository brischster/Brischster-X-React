// import "./style.css";

function NavBar() {
  return (
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
            <a href="#about"> About Me</a>
          </li>
          <li className="nav-item">
            <a href="#work">Work</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact Me</a>
          </li>
          <li className="nav-item">
            <a href="Resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
