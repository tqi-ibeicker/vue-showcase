<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			<input type="radio" id="one" value="0" v-model="index" />
			<label for="one">DynamicComponentOne</label>

			<input type="radio" id="two" value="1" v-model="index" />
			<label for="two">DynamicComponentTwo</label>

			<input type="radio" id="three" value="2" v-model="index" />
			<label for="three">DynamicComponentThree</label>

			<component :is="components[index].component" v-bind="components[index].props"></component>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { componentName } from '@/utils'
import DynamicComponentOne from '@/example/DynamicComponentOne.vue'
import DynamicComponentTwo from '@/example/DynamicComponentTwo.vue'
import DynamicComponentThree from '@/example/DynamicComponentThree.vue'
import { type Component, ref } from 'vue'

const index = ref(0)

type ComponentOptions = {
	component: Component
	props: any
}

const components: ComponentOptions[] = [
	{
		component: DynamicComponentOne,
		props: {
			prop1: 'Uno',
		},
	},
	{
		component: DynamicComponentTwo,
		props: {
			prop2: 'Duo',
		},
	},
	{
		component: DynamicComponentThree,
		props: {
			prop3: 'Tri',
		},
	},
]
</script>

<style scoped></style>
