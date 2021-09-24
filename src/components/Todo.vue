<template>
  <div class="todo" :class="priority">
    <h4>{{ todo.name }}</h4>
    <Button name="X" @eventClick="remove" />
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Todo",
  props: {
    todo: {
      type: Object,
    },
  },
  components: {
    Button,
  },
  computed: {
    priority() {
      return this.todo.priority;
    },
  },
  methods: {
    async remove() {
      const res = await fetch(`${this.$baseURL}/todos/${this.todo.id}`, {
        method: "DELETE",
      });
      if (res.status == 200){
        this.$emit("getData")
        this.$toasted.show(`${this.todo.name.toUpperCase()} deleted`,{icon:'delete'});
      }
    },
  },
};
</script>

<style>
.todo {
  @apply flex
    justify-between
    items-center
    my-4
    p-2
    cursor-pointer
    rounded-sm
    bg-gray-50
    border-l-4
    transition
    duration-500
    hover:shadow-lg
    hover:bg-white;
}
.todo button {
  @apply text-red-600;
}
.low {
  @apply border-yellow-200;
}
.medium {
  @apply border-green-400;
}
.critical {
  @apply border-red-600;
}
</style>
