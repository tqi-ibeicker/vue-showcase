<template>
	<v-card class="mt-4">
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			ChildCount: {{ count }}
			<v-btn icon="mdi-plus" @click="increaseCount()"></v-btn>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { componentName } from '@/utils'

const emit = defineEmits<{
	increase: [value: number]
}>()

const count = ref(0)

function increaseCount() {
	count.value += 1
	emit('increase', count.value)
}
</script>

<style scoped></style>