<template>
  <li>
    <p @click="changeCompleted" :class="{ done: todo.completed }">
      <span >{{ index + 1 }}</span>
      <span>{{ todo.title }}</span>
    </p>
    <button
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
</style>
