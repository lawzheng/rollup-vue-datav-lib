<template>
  <div class="base-scroll" :id="id">
    <div
      class="base-scroll-header"
      :style="{
        backgroundColor: actualConfig.headerBg,
        height: `${actualConfig.headerHeight}px`,
        fontSize: `${actualConfig.headerFontSize}px`,
        color: actualConfig.headerColor
      }"
    >
      <div
        class="base-scroll-header-item base-scroll-text"
        v-for="(headerItem, i) in actualConfig.headerData"
        :key="i"
        :style="{
          width: `${columnWidths[i]}px`,
          ...actualConfig.headerStyle[i]
        }"
        v-html="headerItem"
        :align="aligns[i]"
      ></div>
    </div>
    <div
      class="base-scroll-rows-wrapper"
      :style="{
        height: `${height - actualConfig.headerHeight}px`
      }"
    >
      <div
        class="base-scroll-rows"
        v-for="(rowData, index) in currentRowsData"
        :key="rowData.rowIndex"
        :style="{
          height: `${rowsHeight[index]}px`,
          lineHeight: `${rowsHeight[index]}px`,
          backgroundColor: rowData.rowIndex % 2 === 0 ? rowBg[1] : rowBg[0],
          fontSize: `${actualConfig.rowFontSize}px`,
          color: actualConfig.rowColor
        }"
      >
        <div
          class="base-scroll-columns base-scroll-text"
          v-for="(colData, colIndex) in rowData.data"
          :key="colIndex"
          :style="{
            width: `${columnWidths[colIndex]}px`,
            ...rowStyle[colIndex]
          }"
          :align="aligns[colIndex]"
          v-html="colData"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { v4 as uuidv4} from 'uuid'
  import { ref, watch } from 'vue'
  import useScreen from "../../hooks/useScreen";
  import cloneDeep from 'lodash/cloneDeep'
  import assign from 'lodash/assign'

  const defaultConfig = {
    headerData: [],
    headerStyle: [],
    rowStyle: [],
    headerBg: 'rgb(90,90,90)',
    headerHeight: 35,
    headerIndex: false,
    headerIndexContent: '#',
    headerIndexStyle: {
      width: '50px'
    },
    data: [],
    rowNum: 10,
    rowIndexStyle: {
      width: '50px'
    },
    rowBg: [],
    aligns: [],
    headerFontSize: 28,
    rowFontSize: 28,
    headerColor: '#fff',
    rowColor: '#000',
    moveNum: 1,
    duration: 2000,
    headerIndexData: []
  }

  export default {
    name: 'BaseScroll',
    props: {
      config: {
        type: Object,
        default: () => {}
      }
    },
    setup(props) {
      const id = `base-scroll-${uuidv4()}`
      const { width, height} = useScreen(id)
      const actualConfig = ref({})
      const columnWidths = ref([])
      const rowsData = ref([])
      const currentRowsData = ref([])
      const currentIndex = ref(0)
      const rowsHeight = ref([])
      const rowNum = ref(0)
      const rowStyle = ref([])
      const rowBg = ref([])
      const aligns = ref([])
      const isStartAnimation = ref(true)

      let avgHeight

      const handleHeader = (actualConfig) => {
        const _headerData = cloneDeep(actualConfig.headerData)
        const _headerStyle = cloneDeep(actualConfig.headerStyle)
        const _rowsData = cloneDeep(rowsData.value)
        const _rowStyle = cloneDeep(actualConfig.rowStyle)
        const _aligns = cloneDeep(actualConfig.aligns)

        if (_headerData.length === 0) {
          return
        }

        if (actualConfig.headerIndex) {
          _headerData.unshift(actualConfig.headerIndexContent)
          _headerStyle.unshift(actualConfig.headerIndexStyle)
          _rowsData.forEach((rows, index) => {
            if (actualConfig.headerIndexData && actualConfig.headerIndexData.length > 0 && actualConfig.headerIndexData[index]) {
              rows.unshift(actualConfig.headerIndexData[index])
            } else {
              rows.unshift(index + 1)
            }
          })
          _rowStyle.unshift(actualConfig.rowIndexStyle)
          _aligns.unshift('center')
        }
        let useWidth = 0
        let useColumnNum = 0

        actualConfig.headerData = _headerData
        actualConfig.headerStyle = _headerStyle
        _headerStyle.forEach((style, index) => {
          if (style.width) {
            useWidth += +style.width.replace('px', '');
            useColumnNum++
          }
        })
        // 计算每列宽度
        const headerDataLength = _headerData.length
        const avgWidth = (width.value - useWidth) / (headerDataLength - useColumnNum)
        const _columnWidths = new Array(headerDataLength).fill(avgWidth)
        _headerStyle.forEach((style, index) => {
          if (style.width) {
            _columnWidths[index] = +style.width.replace('px', '');
          }
        })
        columnWidths.value = _columnWidths
        rowStyle.value = _rowStyle


        const { rowNum } = actualConfig
        if (_rowsData.length >= rowNum && _rowsData.length < rowNum * 2) {
          const _rowsDataTemp = [..._rowsData, ..._rowsData]
          rowsData.value = _rowsDataTemp.map((item, index) => ({
            data: item,
            rowIndex: index
          }))
        } else {
          rowsData.value = _rowsData.map((item, index) => ({
            data: item,
            rowIndex: index
          }))
        }
        rowBg.value = actualConfig.rowBg
        aligns.value = _aligns
      }

      const handleRows = (config) => {
        const { headerHeight } = config
        const unUsedHeight = height.value - headerHeight
        rowNum.value = config.rowNum
        if (rowNum.value > rowsData.value.length) {
          rowNum.value = rowsData.value.length
        }
        avgHeight = unUsedHeight / rowNum.value

        rowsHeight.value = new Array(rowNum.value).fill(avgHeight)
      }

      const startAnimation = async () => {
        if (!isStartAnimation.value) return
        const config = actualConfig.value
        const { rowNum, moveNum, duration } = config
        const totalLength = rowsData.value.length
        if (totalLength < rowNum) return
        const index = currentIndex.value
        const _rowsData = cloneDeep(rowsData.value)
        const rows = _rowsData.slice(index)
        rows.push(..._rowsData.slice(0, index))
        currentRowsData.value = rows

        if (!isStartAnimation.value) return
        rowsHeight.value = new Array(totalLength).fill(avgHeight)
        const waitTime = 300
        await new Promise(resolve => setTimeout(resolve, waitTime))
        rowsHeight.value.splice(0, moveNum, new Array(moveNum).fill(0))

        currentIndex.value += moveNum
        const isLast = currentIndex.value - totalLength
        if (isLast >= 0) {
          currentIndex.value = isLast
        }
        if (!isStartAnimation.value) return
        await new Promise(resolve => setTimeout(resolve, duration - waitTime))
        await startAnimation()
      }

      const stopAnimation = () => {
        isStartAnimation.value = false
      }

      const update = (() => {
        stopAnimation()
        const _actualConfig = assign(defaultConfig, props.config)
        rowsData.value = _actualConfig.data || []
        handleHeader(_actualConfig)
        handleRows(_actualConfig)
        actualConfig.value = _actualConfig
        isStartAnimation.value = true
        startAnimation()
      })

      watch(() => props.config, () => {
        update()
      })
      return {
        id,
        actualConfig,
        columnWidths,
        rowsData,
        rowsHeight,
        rowStyle,
        rowBg,
        aligns,
        currentRowsData,
        height
      }
    }
  }
</script>

<style lang="scss" scoped>
  .base-scroll {
    width: 100%;
    height: 100%;
    .base-scroll-text {
      /*padding: 0 10px;*/
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
    }
    .base-scroll-header {
      display: flex;
      font-size: 15px;
      align-items: center;
      .base-scroll-header-item {
      }
    }
    .base-scroll-rows-wrapper {
      overflow: hidden;
      .base-scroll-rows {
        display: flex;
        align-items: center;
        transition: all 0.3s linear;
        .base-scroll-columns {
          height: 100%;
        }
      }
    }
  }
</style>
