<script setup lang="ts">
import { RouterView } from 'vue-router'

import { ref } from 'vue'

const drawer = ref<boolean | null>(null)

const items = [
	{
		title: 'Básico',
		value: 'basic',
	},
	{
		title: 'Estilos',
		value: 'styling',
	},
	{
		title: 'Renderização',
		value: 'rendering',
	},
]
</script>

<template>
	<v-app id="inspire">
		<v-app-bar>
			<template v-slot:prepend>
				<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			</template>

			<v-app-bar-title>Vue Showcase</v-app-bar-title>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer">
			<v-list-item v-for="item in items" :key="item.value" :to="item.value" :title="item.title" />
		</v-navigation-drawer>

		<v-main>
			<v-container>
				<RouterView />
			</v-container>
		</v-main>
	</v-app>
</template>

<style scoped></style>
