import selfie from "../Assets/selfie.jpg";

function About() {
  return (
    <section>
      <h3 id="about" className="section-title">
        About Me
      </h3>
      <div className="about-container">
        <img
          src={selfie}
          alt="Image of Me"
          className="selfie"
          width={400}
          height={300}
        />
        {/* Wrap my image around the about me content */}
        <p className="about-text">
          My name is Ryan Brisch. I am brand new to coding but I am very
          exciting about the opportunity to learn and then apply what I have
          leared to helping make the world a better place! I am currently
          enrolled at the University of Denver's Full Stack Coding Bootcamp
          Cohort APR-AUG 2022.
          <br />
          <br />I live in Villa Park neighborhood of Denver, CO. I live with my
          wife, Nicole, and our two wonderful daughters, Joni and Hadley and our
          dog Bunches. I believe that that Bitcoin and its unintended scope of
          influence will be the greatest invention of my lifetime.
        </p>
      </div>
    </section>
  );
}

export default About;
