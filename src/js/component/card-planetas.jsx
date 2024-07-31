import React, { useState, useContext } from "react"
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

function CardPlanetas({ name, population, terrain, id }) {
    const{store, actions}=useContext(Context)
    function agregarFavoritos(){
        actions.favoritos(name)

    }

    return (
        <div className="">

            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                {id == 1 ?
                    <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="card-img-top" alt={name} />
                    :
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt={name} />
                }
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">population: {population}</p>
                    <p className="card-text">terrain: {terrain}</p>

                    <Link to={`/masinfo/${id}`}>
                    <button className="btn btn-outline-primary float-start">More info</button>
                    </Link>
                    <button onClick={agregarFavoritos} className="btn btn-outline-warning float-end">
                        <i className="fa fa-heart"></i>
                    </button>


                </div>
            </div>
        </div>

    )
};
export default CardPlanetas
