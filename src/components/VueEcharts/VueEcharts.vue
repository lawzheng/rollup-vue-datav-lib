<template>
  <div class="echarts" :ref="refsName"></div>
</template>

<script>
import { watch, onMounted, getCurrentInstance } from 'vue'
import Echarts from 'echarts'
export default {
  name: 'VueEcharts',
  props: {
    options: Object,
    theme: [Object, String]
  },
  setup(ctx) {
    let dom, chart
    const refsName = 'echarts'
    const initChart = () => {
      if (!chart) {
        // const instance = getCurrentInstance()
        // dom = instance.ctx.$refs[refsName]
        dom = document.getElementsByClassName('echarts')[0]
        chart = Echarts.init(dom, ctx.theme)
      }
      if (chart && ctx.options) {
        chart.setOption(ctx.options)
      }
    }
    onMounted(() => {
      initChart()
    })
    watch(() => ctx.options, () => {
      initChart()
    })
    return {
      refsName
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
