<template>
	<v-card>
		<v-card-title>{{ getCurrentInstance()?.type.__name }}.vue</v-card-title>
		<v-card-text>
			Count: {{ count }}
			<v-btn icon="mdi-plus" @click="count += 1"></v-btn>
			<BidirectionalChild v-model="count" />
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import {getCurrentInstance, ref} from 'vue'
import BidirectionalChild from "@/example/BidirectionalChild.vue";

const count = ref(0)
</script>

<style scoped></style>
