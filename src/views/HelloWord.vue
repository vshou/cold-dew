<template>
  <h1>Hello World</h1>
  <button @click="toPage">跳转</button>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";

  const route = useRouter()
  const toPage = () => {
    route.push({
      path: '/'
    })
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  button {
    position: relative;
    margin-left: 49%;
  }
</style>