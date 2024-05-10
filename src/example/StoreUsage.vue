<template>
  <v-card class="mt-4">
    <v-card-title>{{ componentName() }}</v-card-title>
    <v-card-text>
      <v-text-field v-model="appTitle.title"></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import {useAppTitle} from "@/stores/AppTitle";
import {componentName} from "@/utils";

const appTitle = useAppTitle()
</script>

<style scoped>

</style>