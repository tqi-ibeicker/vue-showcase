<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			<input type="checkbox" id="checkbox1" v-model="show" />
			<label for="checkbox1">v-show</label>
			<p v-show="show">
				<ShowIfTimestamp />
			</p>

      <br>

			<input type="checkbox" id="checkbox2" v-model="vIf" />
			<label for="checkbox2">v-if</label>
			<p v-if="vIf">
				<ShowIfTimestamp />
			</p>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { componentName } from '@/utils'
import { ref } from 'vue'
import ShowIfTimestamp from '@/example/ShowIfTimestamp.vue'

const show = ref(true)

const vIf = ref(true)

</script>

<style scoped></style>
