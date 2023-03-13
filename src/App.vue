<template>
  <LoadingComponent :load="loading.sign"/>
  <router-view/>
</template>

<script setup lang="ts">
  import LoadingComponent from './components/LoadingComponent.vue'
  import { Loading } from './store/LoadingStore'

  console.log('\n' +
      '   _____      _     _   _____                \n' +
      '  / ____|    | |   | | |  __ \\               \n' +
      ' | |     ___ | | __| | | |  | | _____      __\n' +
      ' | |    / _ \\| |/ _  | | |  | |/ _ \\ \\ /\\ / /\n' +
      ' | |___| (_) | | (_| | | |__| |  __/\\ V  V / \n' +
      '  \\_____\\___/|_|\\____| |_____/ \\___| \\_/\\_/  \n' +
      '                                             \n' +
      '                                             \n')
  console.log('🚀 https://github.com/withv/cold-dew')
  const loading = Loading();
</script>

<style lang="less">
  @import 'assets/less/global.less';
</style>