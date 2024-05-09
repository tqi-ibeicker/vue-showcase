<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			Prop2: {{ prop2 }}
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { componentName } from '@/utils'

const props = defineProps<{
  prop2: string
}>()
</script>

<style scoped></style>
