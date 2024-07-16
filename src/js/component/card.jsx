import React, { useState, useContext } from "react"
import { Context } from "../store/appContext.js";

function Card({ name, gender, hair_color, eye_color, id }) {
    return (
        <div className="">

            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">gender: {gender}</p>
                    <p className="card-text">hair_color: {hair_color}</p>
                    <p className="card-text">eye_color: {eye_color}</p>


                    <button className="btn btn-outline-primary float-start">More info</button>
                    <button className="btn btn-outline-warning float-end">
                        <i className="fa fa-heart"></i>
                    </button>

                </div>
            </div>
        </div>

    )
};
export default Card

