import { useState, useEffect } from 'react'
import './card.css'

const url = 'https://pokeapi.co/api/v2/pokemon/';

function Card() {

    const [pokemon, setPokemon] = useState(null);

    const setPokemonObject = (obj) => {
        setPokemon(obj);
    }

    const getRandomNumber = () => {
        const min = 0;
        const max = 11;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getPokemonNames = () => {
        const pokemonTypes = ['charmander','charmeleon','charizard','squirtle'
                            ,'wartortle', 'blastoise', 'pikachu', 'raichu'
                            ,'clefairy', 'clefable', 'jigglypuff', 'wigglytuff'];
        
        return pokemonTypes[getRandomNumber()];
    }

    useEffect(() => {
        const getPokemon = async (name) => {
            try {
                const pokemon = await fetch(url + name);
                const pokemonData = await pokemon.json();
                setPokemon(pokemonData);
            }
            catch(e) {
                console.log(e);
            }
        }
        getPokemon(getPokemonNames());
    }, []);

    return (
        <div className='card'>
            {pokemon && (
                <>
                    <img className='cardImg' src={pokemon.sprites.front_default} alt="card pic"></img>
                    <p className='cardTitle'>{pokemon.name}</p>
                </>
            )}
        </div>
    )
}

export default Card