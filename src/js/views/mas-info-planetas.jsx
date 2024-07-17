import React, { useState, useContext,useEffect} from "react"
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";
import Planetas from "../component/planetas.jsx";


function MasInfoPlanetas () {
    const {id}=useParams()
    const { store, actions } = useContext(Context)
    
    useEffect(() => {
        actions.planetas(id)
    }, [])

    return (
        <div className="container">
            <div className="d-flex flex-row overflow-scroll">

                {store.planetas.map((item) => (
                    <CardPlanetas
                        id={id}
                        name={item.name}
                        population={item.population}
                        terrain={item.terrain}
                        climate={item.climate}
                        diameter={item.diameter}
                        gravity={item.gravity}
                    />

                ))}
            </div>
        </div>
    )
};

export default MasInfoPlanetas
