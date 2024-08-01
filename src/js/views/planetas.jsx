import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CardPlanetas from "../component/card-planetas.jsx";


function Planetas() {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.listaDePlanetas()
    }, [])
    // console.log(store.planetas)
    /*
    0
    : 
    climate
    : 
    "arid"
    created
    : 
    "2014-12-09T13:50:49.641000Z"
    diameter
    : 
    "10465"
    edited
    : 
    "2014-12-20T20:58:18.411000Z"
    films
    : 
    (5) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/']
    gravity
    : 
    "1 standard"
    name
    : 
    "Tatooine"
    orbital_period
    : 
    "304"
    population
    : 
    "200000"
    residents
    : 
    (10) ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/', 'https://swapi.dev/api/people/4/', 'https://swapi.dev/api/people/6/', 'https://swapi.dev/api/people/7/', 'https://swapi.dev/api/people/8/', 'https://swapi.dev/api/people/9/', 'https://swapi.dev/api/people/11/', 'https://swapi.dev/api/people/43/', 'https://swapi.dev/api/people/62/']
    rotation_period
    : 
    "23"
    surface_water
    : 
    "1"
    terrain
    : 
    "desert"
    url
    :
    */
    return (
        <div className="container">
            <div className="d-flex flex-row overflow-scroll">

                {store.planetas.map((item, index) => (
                    <CardPlanetas
                        key={index}
                        name={item.name_planet}
                        population={item.population}
                        terrain={item.terrain}
                        id={index + 1}
                    />

                ))}
            </div>
        </div>
    )
};

export default Planetas
