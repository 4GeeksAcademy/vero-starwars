import React from "react";
import "../../styles/home.css";
import Personajes from "./pantalla-principal.jsx";
import Planetas from "./planetas.jsx";

export const Home = () => (

	<div className="Card">
		 <div className="text-center mt-5">
			<h1>Personajes</h1>
			<Personajes/>
			<br/>

			<h1>Planetas</h1>
			<Planetas/>
		</div> 
	 </div>
);
