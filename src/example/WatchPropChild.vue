<template>
	<v-card class="mt-4">
		<v-card-title>{{ getCurrentInstance()?.type.__name }}.vue</v-card-title>
		<v-card-text> ChangeCount: {{ changedCount }}</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import {getCurrentInstance, ref, watch} from 'vue'

const props = defineProps<{
	childValue: boolean
}>()

const changedCount = ref(0)

watch(
	() => props.childValue,
	() => {
		changedCount.value += 1
	},
)
</script>

<style scoped></style>
