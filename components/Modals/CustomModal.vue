<script setup>
const isOpen = defineModel({ value: Boolean });
const props = defineProps({
	question: String,
	action: Function,
});
</script>

<template>
	<UModal v-model="isOpen" prevent-close>
		<UCard>
			<div class="flex flex-col justify-center items-center">
				<p class="text-xl leading-loose">{{ props.question }}</p>
			</div>
			<div class="flex justify-between mt-6">
				<UButton color="black" label="Нет" @click="isOpen = false" />
				<UButton label="Да" @click="action" />
			</div>
		</UCard>
	</UModal>
</template>
