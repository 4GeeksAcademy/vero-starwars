const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			personaje: {},
		},
		actions: {
			// Use getActions to call a function within a fuction
			listaDePeronajes: async () => {
				try {
					const response = await fetch(`https://swapi.dev/api/people`, {
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
					const response = await fetch(`https://swapi.dev/api/planets`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ planetas: data.results })
					}
				} catch (error) {
					console.log(error)
				}
			},
			personaje: async (id) => {
				try {
					const response = await fetch(`https://swapi.dev/api/people/${id}/`, {
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

		}
	}
};

export default getState;
