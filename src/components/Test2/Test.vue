<template>
  <div class="text">{{ message }}</div>
  <div @click="add">{{doubleCount}}</div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: "TestComponent2",
  setup() {
    const message = "hello wolrd s";
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
  color: blue;
}
</style>