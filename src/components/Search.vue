<template>
  <input type="text" class="search" placeholder="Search..." @keyup="$emit('searchEvent',$event)" />
</template>

<script>
export default {
  name: "Search",
};
</script>

<style>
.search {
  @apply w-full
  mt-6
  border-none
  outline-none
  p-2
  rounded-sm
  font-bold
  text-white
  bg-gray-700;
}
</style>
