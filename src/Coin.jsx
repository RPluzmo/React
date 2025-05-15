import "./Coin.css";
import { useState } from "react";
import dice1 from "./assets/coin/dice-1.svg";
import dice2 from "./assets/coin/dice-2.svg";

const coinImages = [dice1, dice2];
const sideNames = [ "Ciparu","Ģērboni"];

function Coin() {
  const [coinValue, setCoinValue] = useState(1);

  function flipCoin() {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    setCoinValue(randomNumber);
  }

  return (
    <article className="coin">
      <h2>Monēta</h2>
      <button onClick={flipCoin}>Mest</button>
          <p>Jūs uzmetāt: <strong>{sideNames[coinValue - 1]}</strong></p>
          <img
            src={coinImages[coinValue - 1]}
            alt={"Monētu: " + sideNames[coinValue - 1]}
          /> 
    </article>
  );
}

export default Coin;
