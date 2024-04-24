<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			Count: {{ count }}
			<v-btn icon="mdi-plus" @click="count += 1"></v-btn>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { componentName } from '@/utils'

const count = ref(0)
</script>
