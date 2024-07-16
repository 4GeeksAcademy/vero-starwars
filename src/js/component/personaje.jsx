//aca llega la informacion desde mas-info

import React from "react";

function Personaje({ id,name,gender,hair_color,eye_color,birth_year,homeworld,species}) {
    return (
        <div className="container">
            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">gender: {gender}</p>
                    <p className="card-text">hair_color: {hair_color}</p>
                    <p className="card-text">eye_color: {eye_color}</p>
                    <p className="card-text">birth_year: {birth_year}</p>
                    <p className="card-text">homeworld: {homeworld}</p>
                    <p className="card-text">species: {species}</p>


                </div>

            </div>

        </div>

    )
};
export default Personaje
