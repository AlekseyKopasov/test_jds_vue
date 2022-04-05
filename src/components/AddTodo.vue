<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="value">
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      value: '',
    }
  },
  methods: {
    submit() {
      if (this.value.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.value,
          completed: false
        };

        this.$emit('add-todo', newTodo);
        this.value = '';
      }
    }
  }
}
</script>

<style scoped>

</style>
