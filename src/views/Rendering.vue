<script setup lang="ts">

import ShowIf from "@/example/ShowIf.vue";
import DynamicComponentParent from "@/example/DynamicComponentParent.vue";
</script>

<template>
  <v-row>
    <v-col>
      <h1>Renderização</h1>
      <h2>v-if vs v-show</h2>
      <p>v-if constrói e destrói o elemento no html, v-show apenas esconde o elemento, não destruindo ou reconstruindo.
      Selecione e deselecione os checkboxes para ver o comportamento dos dois.</p>
      <ShowIf />

      <h2>Componentes dinâmicos</h2>
      <p>É possível ter um componente dinâmico que se transforma em outro com o parâmetro <code>:is="Component"</code>.
      Caso cada um tenha suas próprias props, elas podem ser passadas por <code>v-bind=""</code></p>
      <DynamicComponentParent />
    </v-col>
  </v-row>
</template>

<style scoped>

</style>