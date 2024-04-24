<template>
	<h2>Reatividade básica</h2>
	<p>Como criar um valor reativo e exibí-lo no template.</p>
	<v-card>
		<v-card-title>BasicReactivity.vue</v-card-title>
		<v-card-text>
			Count: {{ count }}
			<v-btn icon="mdi-plus" @click="count += 1"></v-btn>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
