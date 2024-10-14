<script setup>
import MainCard from "~/components/Cards/MainCard.vue";
import { useCardsStore } from "~/store/useCardsStore";

const { $storage } = useNuxtApp();
const store = useCardsStore();
const { cards } = storeToRefs(store);
const { updateValues, removeCard } = store;
onMounted(() => {
	updateValues($storage.getItem("cards"));
});

if (process.client) {
	window.addEventListener("storage", () => {
		updateValues($storage.getItem("cards"));
	});
}
</script>
<template>
	<div>
		<h1 class="mb-8 text-lg text-gray-900">Мои карточки</h1>
		<ul class="cards-wrapper flex gap-2 flex-wrap">
			<li class="text-center break-words" v-for="card in cards" :key="card?.id">
				<MainCard
					:content="card?.content"
					:size="card?.size"
					:style="card?.style"
					:id="card?.id"
					:is-editable="false"
				/>
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
.cards-wrapper {
	display: grid;
	grid-template-columns: repeat(4, auto);
	gap: 24px;

	@media (max-width: 756px) {
		grid-template-columns: repeat(2, auto);
	}

	@media (max-width: 540px) {
		grid-template-columns: repeat(1, auto);
	}
}
</style>
