<template>
	<h2>Reatividade Bidirecional</h2>
	<p>
		Para valores que podem ser alterados tanto no pai quanto no filho e a mudança deve ser refletida em ambos, existe a
    função <code>const model = defineModel()</code> e o valor reativo é passado pelo pai através do parâmetro <code>v-model="X"</code>
	</p>
	<v-card>
		<v-card-title>BidirectionalParent.vue</v-card-title>
		<v-card-text>
			Count: {{ count }}
			<v-btn icon="mdi-plus" @click="count += 1"></v-btn>
			<BidirectionalChild v-model="count" />
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BidirectionalChild from "@/example/BidirectionalChild.vue";

const count = ref(0)
</script>

<style scoped></style>
