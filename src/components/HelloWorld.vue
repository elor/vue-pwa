<script setup lang="ts">
import { useOnlineStore } from "@/stores/online";

defineProps<{
  msg: string;
}>();

const online = useOnlineStore();
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      This site is a PWA,
      hosted on Github Pages,
      compiled from Vue+TS sources with Github Actions,
      and works fully offline.
    </h3>
    <h3>
      It features online/offline detection, a pinia store (instead of vuex), and a vue history router.
    </h3>
    <h3>Online/Offline detection: You are {{ online.online ? "Online" : "Offline" }}</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

h3 {
  font-size: 1.2rem;
  margin-top: 1em;
}

h1,
h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  h3 {
    text-align: justify;
  }
}
</style>
