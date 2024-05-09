<template>
	<v-card class="mt-4">
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			<ul>
				<li v-for="(value, key) in reactiveObject">{{ key }}: {{ value }}</li>
			</ul>
			<v-btn @click="addFoo" class="mr-2">+ foo</v-btn>
			<v-btn @click="addBar">+ bar</v-btn>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { componentName } from '@/utils'
import { reactive } from 'vue'

const reactiveObject = reactive({
	foo: 1,
	bar: 2,
})

function addFoo() {
	reactiveObject.foo += 1
}

function addBar() {
	reactiveObject.bar += 1
}
</script>

<style scoped></style>
