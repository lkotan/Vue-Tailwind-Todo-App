<template>
  <select @change="$emit('onChange',$event)">
    <option disabled selected>Please select priority</option>
    <option
      :value="priority"
      v-for="priority in priorities"
      :key="priority"
      >{{ priority.charAt(0).toUpperCase() + priority.slice(1) }}</option
    >
  </select>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      priorities: ["low", "medium", "critical"],
    };
  },
};
</script>

<style></style>
