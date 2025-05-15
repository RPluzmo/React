import "./Coin.css";
import { useState } from "react";
import dice1 from "./assets/coin/dice-1.svg";
import dice2 from "./assets/coin/dice-2.svg";

const diceImages = [dice1, dice2];
function Coin() {
     const [diceValue, setDiceValue] = useState();

     function flipCoin() {
          const randomNumber = Math.floor(Math.random() * 2) + 1;
          setDiceValue(randomNumber);
     }

     return (
          <article className="coin">
               <h2>Monēta</h2>
               <button onClick={flipCoin}>Mest</button>
               <p>Jūs uzmetāt <strong>{diceValue}</strong></p>
               <img
                    src={diceImages[diceValue - 1]}
                    alt={"Metamais kauliņš " + diceValue}
               />
          </article>
        );
   }

export default Coin;