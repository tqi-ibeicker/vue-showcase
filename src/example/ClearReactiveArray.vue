<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			Arr1: {{ arr1 }}
			<v-btn icon="mdi-plus" @click="clearArr1"></v-btn>
			<br />
			Arr2: {{ arr2 }}
			<v-btn icon="mdi-plus" @click="clearArr2"></v-btn>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { componentName } from '@/utils'

let arr1 = reactive([1, 2, 3, 4, 5])
const arr2 = reactive([1, 2, 3, 4, 5])

function clearArr1() {
	arr1 = arr1.map((i) => i + 1)
}

function clearArr2() {
	const newArr = arr2.map((i) => i + 1)
	arr2.splice(0)
	arr2.push(...newArr)
}
</script>
