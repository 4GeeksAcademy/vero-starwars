import React from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import Personajes from "./pantalla-principal.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Personajes</h1>
		<div className="card"></div>
		<h1>Planetas</h1>
		<div className="card"></div>

		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
