import { ref } from "vue";
import { defineStore } from "pinia";

export const useOnlineStore = defineStore("online", () => {
  const online = ref(navigator.onLine);

  function updateFromNavigator() {
    online.value = navigator.onLine;
  }

  updateFromNavigator();

  window.addEventListener("online", updateFromNavigator);
  window.addEventListener("offline", updateFromNavigator);

  return { online };
});
