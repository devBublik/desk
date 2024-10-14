import { c as createPinia, d as defineStore, u as useNuxtApp } from './server.mjs';
import { ref } from 'vue';

createPinia();
const useCardsStore = defineStore("cards", () => {
  var _a;
  const nuxtApp = useNuxtApp();
  const { $storage } = nuxtApp;
  const cards = ref((_a = $storage.getItem("cards")) != null ? _a : []);
  const updateValues = (newCards) => {
    cards.value = newCards != null ? newCards : [];
  };
  const addCard = (card) => {
    if (card.content) {
      cards.value.push({
        id: Date.now(),
        content: card.content,
        style: card.style,
        size: card.size
      });
    }
  };
  const removeCard = (id) => {
    cards.value = [...cards.value.filter((card) => card.id !== id)];
  };
  const updateCard = (cardVal) => {
    const updatedCard = cards.value.find((card) => card.id == cardVal.id);
    if (updatedCard.id) {
      Object.assign(updatedCard, cardVal);
    }
  };
  return {
    cards,
    updateValues,
    addCard,
    removeCard,
    updateCard
  };
});

export { useCardsStore as u };
//# sourceMappingURL=useCardsStore-COa8clA9.mjs.map
