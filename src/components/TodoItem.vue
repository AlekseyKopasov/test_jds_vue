<template>
  <li class="todo-item">
    <p class="todo-item__content" @click="changeCompleted" :class="{ done: todo.completed }">
      <span class="todo-item__count">{{ index + 1 }}</span>
      <span>{{ todo.title }}</span>
    </p>
    <button
        class="todo-item__button"
      @click="$emit('remove-todo', todo.id)"
    >&times;</button>
  </li>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TodoItem',
  props: ['todo', 'index'],
  methods: {
    ...mapMutations(['changeStatusTodo']),
    changeCompleted() {
      this.changeStatusTodo(this.todo.id);
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }

  .todo-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 20px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
  }

  .todo-item:last-child {
    margin-bottom: 0;
  }

  .todo-item__content {
    margin: 0;
    margin-right: auto;
  }

  .todo-item__count {
    margin-right: 10px;
  }

  .todo-item__button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    padding: 20px;
    width: 15px;
    height: 15px;
    font-size: 18px;
    line-height: 0;
    flex-shrink: 0;
    border-radius: 50%;
    color: #ffffff;
    border: 1px solid #820d1f;
    background-color: #820d1f;
    cursor: pointer;
    transition: color 0.4s ease, background-color 0.4s ease;
  }

  .todo-item__button:hover {
    color: #820d1f;
    background-color: transparent;

  }
</style>
