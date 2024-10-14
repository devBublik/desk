<script setup>
const links = [
	{
		label: "Главная",
		icon: "i-heroicons-home",
		to: "/",
	},
	{
		label: "Настройки",
		icon: "i-heroicons-cog-8-tooth",
		to: "/settings",
	},
];
</script>
<template>
	<div
		class="flex items-center flex-end bg-white border-t border-boulder-100 py-2 px-4 rounded-b-lg"
		:class="isCompact ? 'mb-2' : 'mb-8'"
		:ui="{ inner: 'flex-end' }"
	>
		<UHorizontalNavigation
			:links="links"
			class="border-b border-gray-200 dark:border-gray-800 flex-end"
		/>
	</div>
</template>
