<template>
  <v-card class="mt-4">
    <v-card-title>{{ getCurrentInstance()?.type.__name }}.vue</v-card-title>
    <v-card-text>
      ChildCount: {{ count }}
      <v-btn icon="mdi-plus" @click="increaseCount()"></v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import {getCurrentInstance, ref} from "vue";

const emit = defineEmits<{
  increase: [value: number]
}>()

const count = ref(0)

function increaseCount() {
  count.value += 1
  emit('increase', count.value)
}
</script>

<style scoped>

</style>