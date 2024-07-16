import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";


function Personajes() {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.listaDePeronajes()
    }, [])

    return (
        <div className="container">
            <div className="d-flex flex-row overflow-scroll">

                {store.personajes.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        gender={item.gender}
                        hair_color={item.hair_color}
                        eye_color={item.eye_color}
                        id={index+1}
                    />

                ))}
            </div>
        </div>
    )
};

export default Personajes
