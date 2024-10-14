<script setup>
const props = defineProps({
	label: String,
	color: String,
	class: String,
});
</script>

<template>
	<UButton
		type="button"
		:label="props.label"
		:color="props.color"
		:class="props.class"
	/>
</template>
