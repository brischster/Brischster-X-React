import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import BodyCard from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <BodyCard />
      <Footer />
    </>
  );
}

export default App;
