import { useState, useEffect } from "react";

const phrases = [ "💔Nemīl💔","💖Mīl💖",];

function Flower() {
    const [totalPetals, setTotalPetals] = useState(0);
    const [currentPetal, setCurrentPetal] = useState(0);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const randomPetals = Math.floor(Math.random() * 7) + 4;
        setTotalPetals(randomPetals);
    }, []);

    function pluckPetal() {
        const nextPetal = currentPetal + 1;
        setCurrentPetal(nextPetal);

        if (nextPetal === totalPetals) {
            const finalPhrase = phrases[nextPetal % 2];
            setResult(finalPhrase);
        }
    }

  return (
    <article className="dice">
      <h2>🌸 Mīl / Nemīl</h2>
      {result ? (
        <p>Rezultāts: <strong>{result}!</strong></p>
      ) : (
        <>
          <p>Noplūk ziedlapu:</p>
            <button onClick={pluckPetal}>Plūkt</button>
          <p>
            {currentPetal > 0 && (
              <strong>{phrases[currentPetal % 2]}</strong>
            )}
          </p>
          <p>Atlikušas ziedlapas: {totalPetals - currentPetal}</p>
        </>
      )}
    </article>
  );
}

export default Flower;
