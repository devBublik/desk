export default defineNuxtPlugin(() => {
	return {
		provide: {
			storage: {
				getItem(item) {
					if (process.client) {
						return JSON.parse(localStorage.getItem(item));
					} else {
						return [];
					}
				},

				setItem(item, value) {
					if (process.client) {
						return localStorage.setItem(item, value);
					}
				},
			},
		},
	};
});
