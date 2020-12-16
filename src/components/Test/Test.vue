<template>
  <div>
    <svg width="100px" height="100px" viewBox="0 0 100 100">
      <line x1="0" y1="50" x2="100" y2="50" stroke-width="8" stroke="currentColor"></line>
      <line x1="50" y1="0" x2="50" y2="100" stroke-width="8" stroke="currentColor"></line>
    </svg>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: "TestComponent",
  setup() {
    const message = "hello wolrd s222332xxx";
    let count = ref(1)
    const doubleCount = computed(() => count.value * 2)
    const add = () => count.value++
    return {
      message,
      doubleCount,
      add
    };
  },
};
</script>

<style lang="scss" scoped>
.text {
  color: red;
}
</style>