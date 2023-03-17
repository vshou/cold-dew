<template>
  <div class="common_div fixed_currency" :style="{ 'z-index': sign ? 999 : -999 }">
    <div :class="{ 'shade_div': true, 'fixed_currency': true, 'show_currency': load }">
      <div class="load_img_div center_currency">
<!--        <img :class="{ 'load_img': true, 'load_img_rotate': sign }" src="../assets/image/loading.png"/>-->
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

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
      }, 200)
    }
  })
</script>

<style lang="less" scoped>
  .shade_div {
    background: #000000;
    opacity: 0;
    transition: .4s;
    .load_img_div {
      position: absolute;
      .load_img {
        width: 55px;
        height: 55px;
      }
      .loader {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
        animation: rotate_action 2s linear 0s infinite;
      }
      .loader::before {
        content: "";
        position: absolute;
        top: 6px;
        left: 6px;
        right: 6px;
        bottom: 6px;
        background: #000000;
        z-index: 3;
        border-radius: 50%;
      }
      .loader::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
        border-radius: 50%;
        z-index: 2;
        filter: blur(20px);
      }
    }
  }
  .load_img_rotate {
    animation: rotate_action 1s linear 0s infinite;
  }
</style>