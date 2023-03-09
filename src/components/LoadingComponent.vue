<template>
  <div class="common_div" :style="{ 'z-index': sign ? 999 : -999 }">
    <div :class="{ 'shade_div': true, show_div: load }">
      <div class="load_img_div">
        <img :class="{ 'load_img': true, 'load_img_rotate': sign }" src="../assets/image/loading.png"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";

  const props = defineProps({
    load: {
      type: Boolean,
      default: false
    }
  });
  const sign = ref<boolean>(false);
  watch(props, () => {
    if (props.load) {
      sign.value = true
    } else {
      setTimeout(()  => {
        sign.value = false
      }, 300)
    }
  })
</script>

<style lang="less" scoped>
  .common_div {
    position: fixed;
    width: 100%;
    height: 100%;
    .shade_div {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .8);
      opacity: 0;
      transition: .5s;
      .load_img_div {
        position: absolute;
        width: 70px;
        height: 70px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .load_img {
          position: relative;
          width: 70px;
          height: 70px;
        }
      }
    }
  }
  .show_div {
    opacity: 1 !important;
  }
  .load_img_rotate {
    animation: rotate_action 1s linear 0s infinite;
  }
</style>