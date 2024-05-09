<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
      <p><span class="font-weight-bold" :class="{ 'text-red': checked }">ABCDEF</span></p>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">Red</label>
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { componentName } from '@/utils'
import { ref } from 'vue'

const checked = ref(false)
</script>

<style scoped></style>
