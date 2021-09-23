<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body{
  @apply

  bg-gray-50
}
.app{
  @apply

  flex
  justify-center
  mt-8
}
</style>

