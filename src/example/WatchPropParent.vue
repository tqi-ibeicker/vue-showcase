<template>
	<v-card>
		<v-card-title>{{ getCurrentInstance()?.type.__name }}.vue</v-card-title>
		<v-card-text>
			Value: {{ value }}
			<v-btn icon="mdi-sync" @click="value = !value"></v-btn>
			<WatchPropChild :child-value="value" />
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import {getCurrentInstance, ref} from 'vue'
import WatchPropChild from '@/example/WatchPropChild.vue'

const value = ref(false)
</script>
