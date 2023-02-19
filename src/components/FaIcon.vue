<script setup lang="ts">
defineProps<{
  fa: string;
}>();
</script>

<template>
  <font-awesome-icon :icon="`fa-regular fa-${fa}`" />
</template>
