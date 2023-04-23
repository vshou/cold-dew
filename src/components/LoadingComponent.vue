<template>
  <div class="common_div fixed_currency" :style="{ 'z-index': sign ? 999 : -999 }">
    <div :class="{ 'shade_div': true, 'fixed_currency': true, 'show_currency': load }">
      <div class="load_img_div center_currency">
        <img :class="{ 'load_img': true, 'load_img_rotate': sign }" src="../assets/image/loading.png" alt="加载..."/>
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
    background: rgba(0, 0, 0, .6);
    opacity: 0;
    transition: .4s;
    .load_img_div {
      position: absolute;
      .load_img {
        width: 55px;
        height: 55px;
      }
    }
  }
  .load_img_rotate {
    animation: rotate_action 1s linear 0s infinite;
  }
</style>