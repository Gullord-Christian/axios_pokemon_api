import React, {useState} from 'react'
import axios from 'axios';


const AxiosPokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemonAxios = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
            .then(response => {
                setPokemon(response.data.results)
            })
            .catch(err =>
                console.log(err))
    }

    return(
        <div>
            <fieldset>
                <h3>Pokemon API</h3>
                    <button onClick={fetchPokemonAxios} type='submit'>Fetch pokemon</button>
            </fieldset>
            <ul>
            {
            pokemon.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)
            }
            </ul>
        </div>
    );
}

export default AxiosPokemon