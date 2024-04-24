<template>
	<h2>Reagindo a Mudanças nas Propriedades</h2>
	<p>
		Quando for necessário executar algo na mudança de valores das propriedades, usamos o <code>watch</code> com uma
    função de getter em vez de usar o valor da propriedade como argumento.
	</p>
	<v-card>
		<v-card-title>WatchPropParent.vue</v-card-title>
		<v-card-text>
			Value: {{ value }}
			<v-btn icon="mdi-sync" @click="value = !value"></v-btn>
			<WatchPropChild :child-value="value" />
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WatchPropChild from '@/example/WatchPropChild.vue'

const value = ref(false)
</script>
