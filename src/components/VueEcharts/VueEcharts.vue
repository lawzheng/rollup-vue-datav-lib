<template>
  <div :class="[className, 'echarts']" :ref="refsName"></div>
</template>

<script>
import { watch, onMounted, getCurrentInstance } from 'vue'
import Echarts from 'echarts'
import { v4 as uuidv4} from 'uuid'

export default {
  name: 'VueEcharts',
  props: {
    options: Object,
    theme: [Object, String]
  },
  setup(ctx) {
    let dom, chart
    const refsName = 'echarts'
    let className = `echarts${uuidv4()}`
    const initChart = () => {
      if (!chart) {
        // const instance = getCurrentInstance()
        // dom = instance.ctx.$refs[refsName]
        dom = document.getElementsByClassName(className)[0]
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
      refsName,
      className
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
