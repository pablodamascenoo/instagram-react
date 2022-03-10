import reactDom from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";

function App() {
  return (
    <div>
      <Navbar />
      <Corpo />
    </div>
  );
}

const divRoot = document.querySelector(".root");
reactDom.render(<App />, divRoot);
