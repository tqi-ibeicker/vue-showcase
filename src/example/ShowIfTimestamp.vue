<template>
	<span>Criado em: {{ timestamp }}</span>
</template>

<script setup lang="ts">
let timestamp = new Date().toLocaleTimeString()
</script>

<style scoped></style>
