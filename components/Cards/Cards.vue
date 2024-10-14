<script setup>
import MainCard from "../Cards/MainCard.vue";

const props = defineProps({
	items: Array,
	isEdit: Boolean,
});
const emit = defineEmits(["edit", "delete"]);
</script>
<template>
	<ul class="cards-wrapper flex gap-2 flex-wrap">
		<li class="text-center break-words" v-for="card in items" :key="card?.id">
			<MainCard
				:content="card?.content"
				:size="card?.size"
				:style="card?.style"
				:id="card?.id"
				:is-editable="true"
				@delete="$emit('delete', card)"
				@edit="$emit('edit', card)"
			/>
		</li>
	</ul>
	<Modal></Modal>
</template>
