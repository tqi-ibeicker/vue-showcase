<template>
	<h2>Reatividade do Filho Para o Pai</h2>
	<p>O componente filho emite eventos para o componente pai através da definição do <code>const emit = defineEmits()</code>
  e posteriormente chamando <code>emit('NomeDoEvento', param1)</code></p>
	<v-card>
		<v-card-title>EmitParent.vue</v-card-title>
		<v-card-text>
			Count: {{ count }}
			<ChildEmit @increase="handleIncrease" />
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildEmit from '@/example/EmitChild.vue'

const count = ref(0)

function handleIncrease(value: number) {
	count.value = value
}
</script>
