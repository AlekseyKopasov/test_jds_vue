<template>
  <form class="add-todo" @submit.prevent="submit">
    <input class="add-todo__input" type="text" v-model="value">
    <button class="add-todo__button" type="submit">Add Todo</button>
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
  .add-todo {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
  }

  .add-todo__input {
    width: 100%;
    margin-right: 15px;
    padding: 10px;
    font-size: 16px;
  }

  .add-todo__button {
    flex-shrink: 0;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #820d1f;
    border: 1px solid #820d1f;
    background-color: transparent;
    cursor: pointer;
    transition: border-color 0.4s ease, background-color 0.4s ease, color 0.4s ease;
  }

  .add-todo__button:hover {
    border-color: #49820d;
    background-color: #49820d;
    color: #ffffff;
  }
</style>
