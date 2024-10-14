<script setup lang="ts">
const props = defineProps({
	error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
	<div
		class="max-h-screen px-2 h-screen flex flex-col justify-center items-center"
	>
		<h2 class="error text-green-500 font-bold mb-8 text-9xl">
			{{ error.statusCode }}
		</h2>
		<p class="text-xl text-gray-900 mb-4 text-semibold">Что-то пошло не так</p>
		<p class="text-lg text-gray-900 text-center mb-10">
			Страница, которую вы запрашиваете не существует.<br />
			Возможно она устарела, была удалена или вы ввели неверный адрес.
		</p>
		<UButton @click="handleError">Перейти на главную</UButton>
	</div>
</template>
