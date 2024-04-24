<template>
  <v-card class="mt-4">
    <v-card-title>{{ getCurrentInstance()?.type.__name }}.vue</v-card-title>
    <v-card-text>
      Model: {{ model }}
      <v-btn icon="mdi-plus" @click="increaseCount()"></v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import {getCurrentInstance} from "vue";

const model = defineModel<number>()

function increaseCount() {
  model.value! += 1
}
</script>

<style scoped>

</style>