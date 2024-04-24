<template>
	<v-card>
		<v-card-title>{{ getCurrentInstance()?.type.__name }}.vue</v-card-title>
		<v-card-text>
			Count: {{ count }}
			<ChildEmit @increase="(value) => count = value" />
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import {getCurrentInstance, ref} from 'vue'
import ChildEmit from '@/example/EmitChild.vue'

const count = ref(0)
</script>
