import Dice from "./Dice";
import Coin from "./Coin";
import Flower from "./Flower";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Gājienu palīgs</h1>
      <Dice />
      <Coin />
      <Flower />
    </div>
  );
}

export default App;