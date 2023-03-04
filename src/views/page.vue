<template>
  <h1>This is page</h1>
  <button @click="toHello">跳转</button>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";

  const route = useRouter()
  const toHello = () => {
    route.push({
      path: '/hello'
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