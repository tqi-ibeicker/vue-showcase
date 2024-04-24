<template>
	<v-row>
		<v-col>
			<h1>Básico</h1>
			<BasicReactivity />
      <ParentReactivity />
      <ParentEmitListener />
      <BidirectionalParent />
      <WatchPropParent />
      <ClearReactiveArray />
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import BasicReactivity from '@/example/BasicReactivity.vue'
import ParentReactivity from "@/example/ParentReactivity.vue";
import ParentEmitListener from "@/example/EmitParent.vue";
import BidirectionalParent from "@/example/BidirectionalParent.vue";
import WatchPropParent from "@/example/WatchPropParent.vue";
import ClearReactiveArray from "@/example/ClearReactiveArray.vue";

</script>