import selfie from "../../Assets/selfie.jpg";

function BodyCard() {
  return (
    <>
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
            <br />I live in Villa Park neighborhood of Denver, CO. I live with
            my wife, Nicole, and our two wonderful daughters, Joni and Hadley
            and our dog Bunches. I believe that that Bitcoin and its unintended
            scope of influence will be the greatest invention of my lifetime.
          </p>
        </div>
      </section>
      {/* Section 2 */}
      <section className="main-content">
        <h3 id="work">Work</h3>
        <div className="project-container">
          <figure className="image-card">
            <img
              src="./assets/images/impervious_400x400.jpeg"
              alt="Impervious Logo"
              className="project-image"
            />
            <figcaption className="project-title">
              <a href="https://www.impervious.ai/">
                Impervious Browser Project
              </a>
            </figcaption>
          </figure>
          {/* </div> */}
          {/* Section 3 */}
          {/* <div class="project-card"> */}
          <figure className="image-card">
            <img
              src="./assets/images/cryptocurrency-6560735_640.png"
              alt="Bitcoin Mining"
              className="project-image"
            />
            <figcaption className="project-title">
              <a href="https://www.nasdaq.com/articles/how-bitcoin-mining-strengthens-electricity-grids">
                Bitcoin Mining Benefits to Electricity Grid
              </a>
            </figcaption>
          </figure>
          {/* </div> */}
          {/* Section 3 */}
          {/* <div class="project-card"> */}
          <figure className="image-card">
            <img src="./" alt="Composting Guide" className="project-image" />
            <figcaption className="project-title">
              <a href="https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Recycle-Compost-Trash/Compost#section-2">
                Accepted Items for City of Denver's Composting Program
              </a>
            </figcaption>
          </figure>
          {/* </div> */}
          {/* Section 4 */}
          {/* <div class="project-card"> */}
          <figure className="image-card">
            <img
              src="./assets/images/ashtree.jpeg"
              alt="Be a Smart Ash Tree Request"
              className="project-image"
            />
            <figcaption className="project-title">
              <a href="https://beasmartash.org/what-can-i-do/apply-for-a-tree/">
                Request Free Trees from City of Denver
              </a>
            </figcaption>
          </figure>
          {/* </div> */}
          {/* Section 5 */}
          {/* <div class="project-card"> */}
          <figure className="image-card">
            <img
              src="./assets/images/lightning-network-second-layer-payment-protocol-operates-top-blockchain-bitcoin-cryptocurrency-internet-payment-155201456.jpeg"
              alt="Merchants Using Lightning Network for Payments"
              className="project-image"
            />
            <figcaption className="project-title">
              <a href="https://developer.strike.me/en/">
                Using Strike App and Lightning Network for Payments
              </a>
            </figcaption>
          </figure>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default BodyCard;
