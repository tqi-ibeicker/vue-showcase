<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text> Count: {{ count }} </v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { componentName } from '@/utils'
import { inject } from 'vue'
import { key } from '@/example/ProvideKeys'

const count = inject(key)
</script>

<style scoped></style>
