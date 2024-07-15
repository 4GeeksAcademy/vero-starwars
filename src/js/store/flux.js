const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			listaDePeronajes: async () => {
				const response = await fetch(`https://swapi.dev/api/people`, {
					method: `GET`,
				})
				const data = await response.json()
				if (response.ok) {
					setStore({ personajes: data.results })

				}
			},
			listaDePlanetas: async () => {
				const response = await fetch(`http://swapi.dev/api/planets`, {
					method: `GET`,
				})
				const data = await response.json()
				if (response.ok) {
					setStore({ planetas: data.results })
				}
			}
		}
	}
};

export default getState;
