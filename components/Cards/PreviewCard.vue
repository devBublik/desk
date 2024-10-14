<script setup>
const props = defineProps({
	state: Object,
});
</script>
<template>
	<div class="mb-4">Предпросмотр</div>
	<UCard class="border-blue-500">
		<div
			:class="`${state.style} ${state.size}`"
			class="w-auto border-blue-500 break-words"
		>
			{{ state.content }}
		</div>
	</UCard>
</template>
