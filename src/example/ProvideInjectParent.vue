<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			Count: {{ count }}
			<v-btn icon="mdi-plus" @click="count += 1"></v-btn>
			<ProvideInjectChild />
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { componentName } from '@/utils'
import { provide, ref } from 'vue'
import { key } from '@/example/ProvideKeys'
import ProvideInjectChild from '@/example/ProvideInjectChild.vue'

const count = ref(0)
provide(key, count)
</script>

<style scoped></style>
