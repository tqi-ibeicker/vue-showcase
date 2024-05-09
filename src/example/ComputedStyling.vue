<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			<p><span :class="computedClass">ABCDEF</span></p>
			<input type="checkbox" id="checkbox" v-model="checked" />
			<label for="checkbox">Red / Bold</label>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { componentName } from '@/utils'
import { computed, ref } from 'vue'

const checked = ref(false)

const computedClass = computed(() => ({
  'font-weight-bold': checked.value,
  'text-red': !checked.value
}))
</script>

<style scoped></style>
