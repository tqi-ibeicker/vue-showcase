<script setup lang="ts">
import ProvideInjectParent from '@/example/ProvideInjectParent.vue'
import StoreUsage from "@/example/StoreUsage.vue";
</script>

<template>
	<v-row>
		<v-col>
			<h1>Estado</h1>
			<h2>Provide / Inject</h2>
			<p>
				Se um componente descendente necessita de uma propriedade de um componente em um nível hierárquico mais alto,
				não há a necessidade de passar a propriedade para os componentes intermediários que não tem uso pra essa
				propriedade apenas com o objetivo de disponibilizá-los para os componentes mais baixos. Isso pode ser feito com
				as funções <code>provide()</code> e <code>inject()</code>.
			</p>
			<ProvideInjectParent />

      <h2>Pinia</h2>
      <p>Outra alternativa para usar informações que podem estar em lugares muito diferentes na aplicação é o uso de stores
      do Pinia. Nesse exemplo o título da barra de título e o campo abaixo referenciam o mesmo valor.
      Tente alterá-lo e veja o efeito no título da barra de título.</p>
      <StoreUsage />
		</v-col>
	</v-row>
</template>

<style scoped></style>