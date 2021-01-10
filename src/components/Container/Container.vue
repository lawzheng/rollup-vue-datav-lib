<template>
  <div id="container" class="container" :ref="refName">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
  import {getCurrentInstance, nextTick, onMounted, onUnmounted, ref} from 'vue'
  import {debounce} from "../../utils";

  export default {
    name: 'Container',
    props: {
      options: Object
    },
    setup(ctx) {
      const refName = 'container'
      const width = ref(0)
      const height = ref(0)
      const originalWidth = ref(0)
      const originalHeight = ref(0)
      const ready = ref(false)
      let context, dom, observer

      const initSize = () => {
        return new Promise((resolve) => {
          nextTick(() => {
            dom = context.$refs[refName]

            if (ctx.options && ctx.options.width && ctx.options.height) {
              width.value = ctx.options.width
              height.value = ctx.options.height
            } else {
              width.value = dom.clientWidth
              height.value = dom.clientHeight
            }

            if (!originalWidth.value || !originalHeight.value) {
              originalWidth.value = window.screen.width
              originalHeight.value = window.screen.height
            }
            resolve()
          })
        })
      }

      const updateSize = () => {
        if (width.value && height.value) {
          dom.style.width = `${width.value}px`
          dom.style.height = `${height.value}px`
        } else {
          dom.style.width = `${originalWidth.value}px`
          dom.style.height = `${originalHeight.value}px`
        }
      }

      const updateScale = () => {
        const currentWidth = document.body.clientWidth
        const currentHeight = document.body.clientHeight
        const realWidth = width.value || originalWidth.value
        const realHeight = height.value || originalHeight.value
        const widthScale = currentWidth / realWidth
        const heightScale = currentHeight / realHeight
        dom.style.transform = `scale(${widthScale}, ${heightScale})`
      }

      const onResize = async (e) => {
        await initSize()
        updateScale()
      }

      const onResizeDebounce = debounce(100, () => {
        console.log('resizesss')
        onResize()
      })

      const initMutationObserver = () => {
        observer = new window.MutationObserver(onResize)
        observer.observe(dom, {
          attributes: true,
          attributeFilter: ['style'],
          attributeOldValue: true
        })
      }

      const removeMutationObserver = () => {
        if (observer) {
          observer.disconnect()
          observer.takeRecords()
          observer = null
        }
      }

      onMounted(async () => {
        ready.value = false
        context = getCurrentInstance().ctx
        await initSize()
        updateSize()
        updateScale()
        window.addEventListener('resize', onResizeDebounce)
        initMutationObserver()
        ready.value = true
      })
      onUnmounted(() => {
        window.removeEventListener('resize', onResizeDebounce)
        removeMutationObserver()
      })

      return {
        refName,
        ready
      }
    }
  }
</script>

<style type="text/css" lang="scss">
  .container{
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 999;
    transform-origin: left top;
  }
</style>
