import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">starwars</span>
			</Link>
			<div className="ml-auto">
				<div className="nav-item dropdown">
					<div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Favoritos
					</div>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favoritos.map((item, index) => (
							<li className="d-flex justify-content-between dropdown-item" key={index}>{item}

								<button className="btn btn-outline-danger btn-sm ms-3" onClick={() => actions.eliminarFavoritos(item)}>
									<i className="fa fa-trash"></i>
								</button>

							</li>
						))}

					</ul>
				</div>


			</div>
		</nav>
	);
};
