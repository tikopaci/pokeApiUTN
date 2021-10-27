import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGet({ initialState = [], url }) {

    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const get = async() => {
            try {
                const { data } = await axios.get(url);
                const pokemons = data.results;
                setLoading(false);
                
                let finalPokemons = [];
                let i = 0;

                while (i < pokemons.length) {
                    const { data } = await axios.get(pokemons[i].url);
                    const {name, id} = data;

                    const pokemon = {
                        id,
                        name
                    }
                    finalPokemons.push(pokemon);
                    i++
                }
                setData(finalPokemons);
            } catch (e) {
                console.error(e);
            }
        }
        get();
    }, [url]);
    return [data, loading];
}