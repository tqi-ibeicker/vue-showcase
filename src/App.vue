<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue'

const drawer = ref<boolean | null>(null)
</script>

<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer">
			<!--  -->
		</v-navigation-drawer>

		<v-app-bar>
			<template v-slot:prepend>
				<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			</template>

			<v-app-bar-title>Vue Showcase</v-app-bar-title>
		</v-app-bar>

		<v-main>
			<v-container>
				<RouterView />
			</v-container>
		</v-main>
	</v-app>
</template>

<style scoped></style>
