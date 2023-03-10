<template>
  <div class="common_div" title="播放音乐">
    <video loop
           ref="music_video"
           :class="{'bg_rotate': is_play}"
           :style="{ 'background-image': 'url(' + music_bg +')' }"
           :src="music_url"
           @click="operationFun">
    </video>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { HTTP_IMG_ADDR, HTTP_MUSIC_ADDR } from '../constants/ConfigParam'
  import { Loading } from '../store/LoadingStore'

  const loading = Loading();
  const music_video = ref()
  onMounted(() => {
    music_video.value.focus()
  })
  const music_url = ref<string>(HTTP_MUSIC_ADDR + 'bgm.ogg')
  const music_bg = ref<string>(HTTP_IMG_ADDR + "music_bg.png")
  const is_play = ref<boolean>(false)
  const operationFun = () => {

    loading.sign = true
    setTimeout(() => {
      loading.sign = false
    }, 4000)

    if (is_play.value) {
      is_play.value = false
      music_video.value.pause()
      return
    }
    is_play.value = true
    music_video.value.play()
  }
</script>

<style lang="less" scoped>
  .common_div {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
    video {
      background-size: cover;
    }
  }
  .bg_rotate {
    animation: rotate_action 3s linear 0s infinite;
  }
</style>