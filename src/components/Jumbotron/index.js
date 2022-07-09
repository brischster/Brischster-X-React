import "../../App.css";
import banner from "../../Assets/187161.webp";

function Jumbotron() {
  return (
    <>
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
    </>
  );
}

export default Jumbotron;
