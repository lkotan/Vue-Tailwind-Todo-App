<template>
  <div class="todos">
    <header class="header">
      <h5>Todo App Vue-Tailwind</h5>
      <Button class="add" name="Add" @eventClick="$router.push('/todo')" />
    </header>
    <div v-if="todos.length != 0">
      <Todo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @getData="getData"
      />
    </div>
    <h3 v-else>No Todos To Show</h3>
  </div>
</template>

<script>
import Todo from "@/components/Todo";
import Button from "@/components/Button";

export default {
  name: "Todos",
  components: {
    Todo,
    Button,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    async getData() {
      const res = await fetch(`${this.$baseURL}/todos`);
      const data = await res.json();
      this.todos = data;
    },
  },
  async created() {
    await this.getData();
  },
};
</script>

<style>
.todos {
  @apply shadow-xl
  bg-white
  w-96
  px-3 py-2;
}
.todos header {
  @apply flex
    justify-between
    items-center;
}
.todos h5 {
  @apply font-bold
    tracking-wide
    uppercase;
}
header .add {
  @apply bg-blue-700
    text-white
    hover:bg-blue-800;
}
.todos h3 {
  @apply font-bold
  text-center
  my-6
  uppercase
  text-blue-900;
}
</style>
