<template>
  <h2>Reatividade de Pai Para Filho</h2>
  <p>No componente filho definimos a propriedade a ser recebido do pai através da declaração <code>const props = defineProps<{}>()</code>.
  Sendo a propriedade passada pelo pai um valor reativo (ref), as alterações do valor no pai são refletidas no componente filho.</p>
  <v-card>
    <v-card-title>ParentReactivity.vue</v-card-title>
    <v-card-text>
      Count: {{ count }}
      <v-btn icon="mdi-plus" @click="count += 1"></v-btn>
      <ChildReactivity :child-count="count" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildReactivity from "@/example/ChildReactivity.vue";

const count = ref(0)
</script>