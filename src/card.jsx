import { useState, useEffect } from 'react'
import './card.css'

const url = 'https://pokeapi.co/api/v2/pokemon/';

function Card(props) {

    const [pokemon, setPokemon] = useState(null);

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

    const fetchPokemonData = async (name) => {
        try {
            const pokemon = await fetch(url + name);
            const pokemonData = await pokemon.json();
            return pokemonData;
        }
        catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const getPokemon = async (name) => {
            try {
                const pokemonData = await fetchPokemonData(name);
                setPokemon(pokemonData);
            }
            catch(e) {
                console.log(e);
            }
        }
        getPokemon(getPokemonNames());
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPokemonData(getPokemonNames());
            setPokemon(data);
        }
        fetchData();
    }, [props.shuffleTrigger]);

    const handelClick = async () => {
        props.handleScore(pokemon.name);
        const name = getPokemonNames();
        const newData = await fetchPokemonData(name);
        setPokemon(newData);
    }

    return (
        <div onClick={handelClick} className='card'>
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