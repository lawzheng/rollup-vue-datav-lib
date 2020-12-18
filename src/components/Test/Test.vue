<template>
  <div>
    <svg width="100" height="100">
      <defs>
        <symbol id="more" viewBox="0 0 100 100">
          <circle r="5" cx="20" cy="25" fill="currentColor" />
          <circle r="5" cx="20" cy="50" fill="currentColor" />
          <circle r="5" cx="20" cy="75" fill="currentColor" />
          <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor" />
          <line x1="40" y1="50" x2="90" y2="50" stroke-width="8" stroke="currentColor" />
          <line x1="40" y1="75" x2="90" y2="75" stroke-width="8" stroke="currentColor" />
        </symbol>
        <symbol id="play" viewBox="0 0 100 100">
          <polyline points="20 10, 80, 50, 20, 90" fill="currentColor"></polyline>
        </symbol>
        <symbol id="right" viewBox="0 0 100 100">
          <polyline points="20 10, 80, 50, 20, 90" fill="transparent" stroke="currentColor" stroke-width="3"></polyline>
        </symbol>
        <symbol id="box" viewBox="0 0 1024 1024">
           <path d="M512 0L17.656 247.168v529.656L512 1024l494.344-247.176V247.176z" fill="#FDD7AD" p-id="1369"></path><path d="M476.688 79.448v335.448l-335.44-167.728zM882.76 247.168L547.312 414.896V79.448z" fill="#FAC176" p-id="1370"></path><path d="M17.656 247.168v529.656L512 1024V494.344L17.656 247.176z m441.376 691.2L85.64 751.76l-15.008-7.6V332.8l52.96 26.48 302.792 151.488 32.664 16.24v411.36z" fill="#CBB292" p-id="1371"></path><path d="M123.584 359.28V662.08l-52.96 26.48V332.8z" fill="#7F6E5D" p-id="1372"></path><path d="M426.376 510.768L123.584 662.064V359.28z" fill="#7F5B53" p-id="1373"></path><path d="M459.04 527.008v37.96L123.576 732.688 85.624 751.76l-15-7.6V688.56l52.96-26.48 302.792-151.304z" fill="#CBB292" p-id="1374"></path><path d="M459.04 873.936v64.432L85.616 751.76l37.96-19.072 26.48-13.24z" fill="#7F6E5D" p-id="1375"></path><path d="M459.04 564.96v308.968l-308.976-154.48z" fill="#7F5B53" p-id="1376"></path><path d="M512 494.344V1024l494.344-247.176V247.176L512 494.344z m441.376 249.824l-15 7.592-373.408 186.616V527.008l32.664-16.24 302.784-151.488 52.96-26.48v411.36z" fill="#7F6E5D" p-id="1377"></path><path d="M938.368 751.76l-373.4 186.608v-64.44l308.96-154.48 26.48 13.24z" fill="#AF8066" p-id="1378"></path><path d="M953.376 688.552v55.616l-15.008 7.592-37.952-19.072L564.96 564.968v-37.96l32.664-16.24 302.784 151.304z" fill="#7F6E5D" p-id="1379"></path><path d="M873.936 719.448l-308.968 154.48v-308.96z" fill="#59474E" p-id="1380"></path><path d="M953.376 332.8v355.752l-52.96-26.48V359.28z" fill="#AF8066" p-id="1381"></path><path d="M900.416 359.28V662.08L597.624 510.768z" fill="#59474E" p-id="1382"></path><path d="M547.312 79.448v335.448L512 432.552l-35.312-17.656V79.448L512 61.792z" fill="#FDD7AD" p-id="1383"></path>
        </symbol>
      </defs>
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
