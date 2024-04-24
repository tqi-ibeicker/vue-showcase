<template>
	<v-card class="mt-4">
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text> ChangeCount: {{ changedCount }}</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { componentName } from '@/utils'

const props = defineProps<{
	childValue: boolean
}>()

const changedCount = ref(0)

watch(
	() => props.childValue,
	() => {
		changedCount.value += 1
	},
)
</script>

<style scoped></style>
