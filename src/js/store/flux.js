const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			personaje: {},
			favoritos: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			listaDePeronajes: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL+`/people`, {
						method: `GET`,
					})

					if (response.ok) {
						const data = await response.json()
						setStore({ personajes: data.results })

					}
				} catch (error) {
					console.log(error)
				}
			},
			listaDePlanetas: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL+`/planets`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						console.log(data);
						setStore({ planetas: data.results })
					}
				} catch (error) {
					console.log(error)
				}
			},
			personaje: async (id) => {
				try {
					const response = await fetch(process.env.BACKEND_URL+`/people/${id}/`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ personaje: data })
					}
				} catch (error) {
					console.log(error)
				}
			},
			planeta: async (id) => {
				try{
					const response = await fetch(process.env.BACKEND_URL+`/planets/${id}/`,{
					method: `GET`
				})
				if (response.ok){
					const data = await response.json()
					setStore({planeta: data})
				}
			} catch (error) {
				console.log(error);
			}
			},
			agregarPlaneta: async(name_planet,
				populate,
				mass,
				climate,
				diameter,
				gravity,
				orbital_period,
				surface_water) =>{
				try {
					const response = await fetch(process.env.BACKEND_URL+'/planet',{
						method:'POST',
						headers:{"Content-Type":"application/json"},
						body: JSON.stringify({
							name_planet: name_planet,
    						populate: populate,
							mass:mass,
							climate:climate,
							diameter:diameter,
							gravity: gravity,
							orbital_period:orbital_period,
							surface_water: surface_water
						})
					})
					return true
					
				} catch (error) {
				console.log(error);	
				return false
				}
			},
			agregarPersonaje: async(name,gender,
				hair_color,
				eye_color,
				birth_year,
				homeworld,
				species) => {
		 		try {
					const response = await fetch(process.env.BACKEND_URL+'/characters',{
						method:'POST',
						headers:{"Content-Type":"application/json"},
						body: JSON.stringify({
							name:name,
							gender:gender,
							hair_color:hair_color,
							eye_color:eye_color,
							birth_year:birth_year,
							homeworld:homeworld,
							species:species
						})
					})
					return true	

				} catch (error) {
					console.log(error);	
					return false
				}
			},	

			favoritos: (name) => {
				const store= getStore();
				const nuevosFavoritos = [...store.favoritos,name]
				setStore({favoritos: nuevosFavoritos})
			},
			eliminarFavoritos: (name) => {
				const store = getStore();
				let listaAux =[]
				if (store.favoritos.includes(name)){
					 listaAux = store.favoritos.filter((item)=> item !==name)
				}
				setStore({favoritos: listaAux})
			},



		}
	}
};

export default getState;
