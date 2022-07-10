import mining from "../../Assets/cryptocurrency-6560735_640.png";
import tree from "../../Assets/ashtree.jpeg";
import network from "../../Assets/lightningNetwork.jpeg";
import compost from "../../Assets/compost.jpeg";

function BodyCard() {
  return (
    <>
      {/* Section 2 */}
      <section className="main-content">
        <h3 id="work">Work</h3>
        <div className="project-container">
          <figure className="image-card">
            {/* <img
              src={impervious}
              alt="Impervious Logo"
              className="project-image"
            /> */}
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
            <img src={mining} alt="Bitcoin Mining" className="project-image" />
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
            <img
              src={compost}
              alt="Composting Guide"
              className="project-image"
            />
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
              src={tree}
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
              src={network}
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
