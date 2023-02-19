import { ref } from "vue";
import { defineStore } from "pinia";

export const useOnlineStore = defineStore("online", () => {
  const online = ref(navigator.onLine);

  function updateFromNavigator() {
    console.log("navigator.onLine", navigator.onLine);
    online.value = navigator.onLine;
  }

  updateFromNavigator();

  window.addEventListener("online", updateFromNavigator);
  window.addEventListener("offline", updateFromNavigator);

  return { online };
});
