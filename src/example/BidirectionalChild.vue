<template>
	<v-card class="mt-4">
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			Model: {{ model }}
			<v-btn icon="mdi-plus" @click="increaseCount()"></v-btn>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { componentName } from '@/utils'

const model = defineModel<number>()

function increaseCount() {
	model.value! += 1
}
</script>

<style scoped></style>