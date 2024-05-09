<script setup lang="ts">
import BasicClassReactivity from '@/example/BasicClassReactivity.vue'
import ClassReactivityWithStatic from "@/example/ClassReactivityWithStatic.vue";
import ComputedStyling from "@/example/ComputedStyling.vue";
import ClassAsVariable from "@/example/ClassAsVariable.vue";
</script>

<template>
	<v-row>
		<v-col>
			<h1>Estilos</h1>
			<h2>Classe Reativa</h2>
			<p>Atrelar a presença de uma classe a uma propriedade reativa.</p>
			<BasicClassReactivity />

      <h2>Classe Reativa com Classe estática</h2>
      <p>É possível manter classes estáticas e dinâmicas ao mesmo tempo.</p>
      <ClassReactivityWithStatic />

      <h2>Classe Computada</h2>
      <p>A classe também pode ser definida inteiramente como uma propriedade computada.</p>
      <ComputedStyling />

      <h2>Variável de Classe</h2>
      <p>A classe pode ser armazenada em uma variável que pode ser alterada.</p>
      <ClassAsVariable />
		</v-col>
	</v-row>
</template>

<style scoped></style>