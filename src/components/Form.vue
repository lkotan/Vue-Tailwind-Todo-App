<template>
  <div class="form">
    <router-link to="/">Back To</router-link>
    <div class="form-control">
      <input type="text" placeholder="Name" v-model="todo.name" />
    </div>
    <div class="form-control">
      <select @change="onChange">
        <option disabled selected>Lütfen seçin</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="critical">Critical</option>
      </select>
    </div>
    <footer>
      <Button class="save" name="Save" @eventClick="save" />
      <Button class="cancel" name="Cancel" @eventClick="$router.push('/')" />
    </footer>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Form",
  components: {
    Button,
  },
  data() {
    return {
      todo: {
        name: null,
        priority: "low",
      },
    };
  },
  methods: {
    async save() {
      const res = await fetch(`${this.$baseURL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.todo),
      });
      if(res.status==201) this.$router.push("/")
    },
    onChange(e) {
      this.todo.priority = e.target.value;
    },
  },
};
</script>

<style>
.form {
  @apply p-3
  rounded-sm
  drop-shadow-lg
  bg-white;
}

.form a {
  @apply font-bold;
}
.form-control {
  @apply w-80
  flex
  flex-col
  mt-4;
}

.form-control input,
.form-control select {
  @apply border-none
  outline-none
  p-1
  rounded-md
  font-bold
  bg-gray-100;
}

.form-control select {
  @apply text-gray-600;
}

.form footer {
  @apply flex
  justify-end
  my-4;
}

.save {
  @apply mr-3
  bg-blue-700
  hover:bg-blue-400
  hover:text-black;
}
.cancel {
  @apply bg-gray-400
  text-black
  hover:text-white;
}
</style>
