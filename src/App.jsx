import { useState } from 'react'
import Header from './header.jsx';
import Body from './body.jsx';

function App() {

  const pokemonNames = [];

  const [shuffleTrigger, setShuffleTrigger] = useState(0);
  const [pokemon, updatePokemon] = useState(pokemonNames);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const setPokemon = (name) => {
    const newArray = [...pokemon, name]
    updatePokemon(newArray);
  }

  const handleScore = (name) => {

    if (pokemon.includes(name)) {
      setScore(0);
      updatePokemon([]);
    }
    else {
      const newScore = score + 1;
      setScore(newScore);
      setPokemon(name);
      setBestScore(prevBest => Math.max(prevBest, newScore));
    }

    setShuffleTrigger(prevTrigger => prevTrigger + 1);

  }

  return (
    <>
      <Header score={score} bestScore={bestScore}/>
      <Body handleScore={handleScore} shuffleTrigger={shuffleTrigger} />
    </>
  )
}

export default App
