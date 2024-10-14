<script setup>
const emit = defineEmits(["delete"]);
const props = defineProps({
	id: Number,
	content: String,
	style: String,
	size: String,
	isEditable: Boolean,
});
const handleEdit = () => {
	navigateTo("/settings/");
	emit("edit", props);
};
</script>
<template>
	<div :class="`${props.size} ${props.style}`" class="card">
		<div class="w-auto border-blue-500 break-words" v-text="content"></div>
		<UButton
			v-if="props.isEditable"
			color="red"
			class="absolute top-2 right-4"
			@click="$emit('delete', props?.id)"
		>
			<UIcon name="i-heroicons-trash-20-solid" class="w-2 h-2" />
		</UButton>
		<UButton
			v-if="props.isEditable"
			color="green"
			class="absolute top-2 right-12"
			@click="handleEdit(props)"
		>
			<UIcon name="i-heroicons-pencil-20-solid" class="w-2 h-2" />
		</UButton>
	</div>
</template>
