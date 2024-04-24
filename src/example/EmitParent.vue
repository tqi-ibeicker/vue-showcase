<template>
	<v-card>
		<v-card-title>{{ componentName() }}</v-card-title>
		<v-card-text>
			Count: {{ count }}
			<ChildEmit @increase="(value) => (count = value)" />
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildEmit from '@/example/EmitChild.vue'
import { componentName } from '@/utils'

const count = ref(0)
</script>
