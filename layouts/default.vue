<script setup>
import CustomFooter from "~/components/Footer.vue/CustomFooter.vue";
import CustomHeader from "~/components/Header/CustomHeader.vue";
</script>

<template>
	<div class="content">
		<CustomHeader />
		<UContainer class="flex flex-col pb-12 text-xs">
			<slot />
		</UContainer>
	</div>

	<CustomFooter />
</template>

<style>
.content {
	flex: 1 0 0;
}
</style>
