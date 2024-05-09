<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			<p><span :class="[customClass]">ABCDEF</span></p>
			<input type="radio" id="one" value="text-blue" v-model="customClass"/>
			<label for="one">text-blue</label>

			<input type="radio" id="two" value="text-red" v-model="customClass"/>
			<label for="two">text-red</label>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { componentName } from '@/utils'
import { ref } from 'vue'

const customClass = ref('')
</script>

<style scoped></style>
