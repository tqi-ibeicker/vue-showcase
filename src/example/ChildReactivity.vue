<template>
  <v-card class="mt-4">
    <v-card-title>ChildReactivity.vue</v-card-title>
    <v-card-text>
      ChildCount: {{ props.childCount }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  childCount: number
}>()
</script>

<style scoped>

</style>