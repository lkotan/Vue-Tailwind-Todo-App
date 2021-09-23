<template>
  <button @click="eventClick()">{{ name }}</button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    eventClick() {
      this.$emit("eventClick");
    },
  },
};
</script>

<style>
button {
  @apply text-white
    rounded-md
    p-2
    transition
    duration-500
}
</style>
