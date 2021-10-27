import { useState } from 'react';
import useGet from './../../utils/useHttp';
import Loading from './../Loading/Loading';

import './pokecard.css';

export default function Pokecard() {
    const api = "https://pokeapi.co/api/v2/pokemon/";
    const [data, loading, error] = useGet({ url: api });
    const [pokeName, setPokeName] = useState('');
    const [pokeSearch, setPokeSearch] = useState([]);

    const handlerInput = (e) => {
        setPokeName(e.target.value);
    }

    const filter = (e) => {
        let pokemon = data.filter(pokemon => pokemon.name === pokeName)
        setPokeSearch(pokemon);
    } 

    return (
        <>
            <div className="container-fluid bg">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-6">
                        <input type="text" className="form-control mt-1" value={data.name} placeholder="Search for a Pokemon..." onChange={handlerInput} />
                        <div className="d-grid gap-2">
                            <button className="btn btn-danger my-2 mb-4" onClick={filter}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="row d-flex">
                {
                    error ? (
                        console.error(error)
                    ) : [(            
                    loading ? (
                        <div className="col-12 d-flex justify-content-center mt-5">
                            <Loading />
                        </div>
                    ) : ([
                        pokeSearch.length > 0 ? (
                            pokeSearch.map(pokemon => (
                            <div className="col-12 d-flex justify-content-center" key={pokemon.id}>
                                <div className="card">
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} className="center p-3" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center text-white text-uppercase">{pokemon.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))) : (
                            data.map(pokemon => (
                                <div className="col-3 mt-5 mb-1 d-flex justify-content-center" key={pokemon.id}>
                                    <div className="card">
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} className="center p-3" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center text-white text-uppercase">{pokemon.name}</h5>
                                        </div>
                                    </div>
                                </div>
                                ))
                            )
                        ])
                    )]
                }
                </div>
            </div>
        </>
    )
}
