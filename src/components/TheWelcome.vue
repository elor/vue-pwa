<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import FaIcon from "./FaIcon.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <FaIcon fa="file-code" />
    </template>
    <template #heading>Source Code</template>

    The source code for this project is available on
    <a href="https://github.com/elor/vue-pwa" target="_blank" rel="noopener"
      >GitHub</a
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <FaIcon fa="folder-open" />
    </template>
    <template #heading>Bundling</template>

    This project is served and bundled with
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
      rel="noopener"
      >Vite</a
    >.
    <br />
    My recommended IDE setup is
    <a href="https://neovim.io/" target="_blank" rel="noopener">Neovim</a>
    +
    <a href="https://github.com/elor/dotfiles" target="_blank" rel="noopener"
      >my config</a
    >.
    <br />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <FaIcon fa="floppy-disk" />
    </template>
    <template #heading>Offline First PWA</template>

    This app is designed to run completely offline. It's cached and served by a
    service worker. It's also a progressive web app, so you should be able to
    install it on your device.
    <br />

    Vue-related tools:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener"
      >Vue Router</a
    >,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"
      >Vue Test Utils</a
    >, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"
      >Vue Dev Tools</a
    >. If you need more resources, we suggest paying
    <a
      href="https://github.com/vuejs/awesome-vue"
      target="_blank"
      rel="noopener"
      >Awesome Vue</a
    >
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <FaIcon fa="square-check" />
    </template>
    <template #heading>What's next?</template>
    <ul>
      <li>
        <s>Get PWA to work (why doesn't it out of the box?)</s><br />
        - Done, I accidentally deleted the `public` directory
      </li>
      <li>
        <s>Make ServiceWorker support history router</s><br />
        - Done, it already does out of the box :-)
      </li>
      <li>Make a nice install button for the PWA</li>
      <li>
        Use LocalStorage or LocalDB with Pinia<br />
        - Optional, but nice to have
      </li>
      <li>
        Make VitePress-compatible for rich blogs?<br />
        - Also optional, but would rid me of Wordpress, which is nice
      </li>
    </ul>
  </WelcomeItem>
</template>
