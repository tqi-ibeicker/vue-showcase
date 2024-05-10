<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			<ProvideInjectGrandchild />
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { componentName } from '@/utils'
import ProvideInjectGrandchild from '@/example/ProvideInjectGrandchild.vue'
</script>

<style scoped></style>
