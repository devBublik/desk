import { createPinia } from "pinia";
const pinia = createPinia();
export const useCardsStore = defineStore("cards", () => {
	const nuxtApp = useNuxtApp();
	const { $storage } = nuxtApp;

	const cards = ref($storage.getItem("cards") ?? []);

	const updateValues = (newCards) => {
		cards.value = newCards ?? [];
	};

	const addCard = (card) => {
		if (card.content) {
			cards.value.push({
				id: Date.now(),
				content: card.content,
				style: card.style,
				size: card.size,
			});
			if (process.client) {
				$storage.setItem("cards", JSON.stringify(cards.value));
			}
		}
	};

	const removeCard = (id) => {
		cards.value = [...cards.value.filter((card) => card.id !== id)];
		if (process.client) {
			$storage.setItem("cards", JSON.stringify(cards.value));
		}
	};
	const updateCard = (cardVal) => {
		const updatedCard = cards.value.find((card) => card.id == cardVal.id);
		if (updatedCard.id) {
			Object.assign(updatedCard, cardVal);
			if (process.client) {
				$storage.setItem("cards", JSON.stringify(cards.value));
			}
		}
	};
	return {
		cards,
		updateValues,
		addCard,
		removeCard,
		updateCard,
	};
});
