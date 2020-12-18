<template>
  <div>
    <svg width="500" height="200" viewBox="0 0 200 200" style="border: 1px solid #000000" preserveAspectRatio="xMidYMax slice">
  <rect x="100" y="100" width="100" height="50" stroke-width="10" style="stroke: #000000; fill:none;"/>
</svg>  
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: "TestComponent",
  setup() {
    const message = "hello wolrd s222332xxxf";
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