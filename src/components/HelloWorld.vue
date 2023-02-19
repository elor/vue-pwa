<script setup lang="ts">
import { useOnlineStore } from '@/stores/online'

defineProps<{
  msg: string;
}>();

const online = useOnlineStore();

console.log('HelloWorld.vue: online', online);

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      This project is hosted statically on Github Pages, after being built from Vue/TS sources with Github Actions.
      It features online/offline detection and a pinia store.
      <br>
      Since the server doesn't redirect arbitrary subpaths to index.html, a hash router should be used.
    </h3>
    <br>
    <h3>You are {{ online.online ? 'Online' : 'Offline' }}</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
