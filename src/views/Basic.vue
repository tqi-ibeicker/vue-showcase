<template>
	<v-row>
		<v-col>
			<h1>Básico</h1>
			<h2>Reatividade básica</h2>
			<p>Como criar um valor reativo e exibí-lo no template.</p>
			<BasicReactivity />

			<h2>Reatividade de Pai Para Filho</h2>
			<p>
				No componente filho definimos a propriedade a ser recebido do pai através da declaração
				<code>const props = defineProps<{}>()</code>. Sendo a propriedade passada pelo pai um valor reativo (ref), as
				alterações do valor no pai são refletidas no componente filho.
			</p>
			<ParentReactivity />

			<h2>Reatividade do Filho Para o Pai</h2>
			<p>
				O componente filho emite eventos para o componente pai através da definição do
				<code>const emit = defineEmits()</code> e posteriormente chamando <code>emit('NomeDoEvento', param1)</code>
			</p>
			<ParentEmitListener />

			<h2>Reatividade Bidirecional</h2>
			<p>
				Para valores que podem ser alterados tanto no pai quanto no filho e a mudança deve ser refletida em ambos,
				existe a função <code>const model = defineModel()</code> e o valor reativo é passado pelo pai através do
				parâmetro <code>v-model="X"</code>
			</p>
			<BidirectionalParent />

			<h2>Reagindo a Mudanças nas Propriedades</h2>
			<p>
				Quando for necessário executar algo na mudança de valores das propriedades, usamos o <code>watch</code> com uma
				função de getter em vez de usar o valor da propriedade como argumento.
			</p>
			<WatchPropParent />

			<h2>Manipulando Arrays Reativos</h2>
			<p>
				Arrays reativos não devem ser reatribuídos, pois assim o template perde a referência do proxy reativo que foi
				criado pelo Vue. Em vez disso deve-se usar os métodos do array para fazer as mudanças de conteúdo do array, como
				<code>splice()</code> e <code>push()</code>. Tente clicar no botão do Arr1 e veja que o componente não responde
				à mudança.
			</p>
			<ClearReactiveArray />
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import BasicReactivity from '@/example/BasicReactivity.vue'
import ParentReactivity from '@/example/ParentReactivity.vue'
import ParentEmitListener from '@/example/EmitParent.vue'
import BidirectionalParent from '@/example/BidirectionalParent.vue'
import WatchPropParent from '@/example/WatchPropParent.vue'
import ClearReactiveArray from '@/example/ClearReactiveArray.vue'
</script>
