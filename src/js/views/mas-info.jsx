import React, { useState, useContext,useEffect} from "react"
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";
import Personaje from "../component/personaje.jsx";


function MasInfo () {
    const {id}=useParams()
    const { store, actions } = useContext(Context)
    
    useEffect(() => {
        actions.personaje(id)
    }, [])

    return (
        <div className="personaje">

             <div className="container" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                    <div className="card-title">{}</div>
                    <Personaje 
                     id={id} 
                     name={store.personaje.name}
                     gender={store.personaje.gender}
                     hair_color={store.personaje.hair_color}
                    eye_color={store.personaje.eye_color}
                    birth_year={store.personaje.birth_year}
                    homeworld={store.personaje.homeworld}
                    species={store.personaje.species}
             />



                </div>
            </div> 
     

    )
};
export default MasInfo
