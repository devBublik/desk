<script setup>
const model = defineModel({
	value: String,
});
</script>
<template>
	<UInput v-model="model" />
</template>
