import "../../App.css";

function Jumbotron() {
  return (
    <>
      <div className="background-image">
        <img
          src="./assets/images/187161.webp"
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
