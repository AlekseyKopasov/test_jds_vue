<template>
  <li>
    <p @click="todo.completed = !todo.completed" :class="{ done: todo.completed }">
      <span >{{ index + 1 }}</span>
      <span>{{ todo.title }}</span>
    </p>
    <button
      @click="$emit('remove-todo', todo.id)"
    >&times;</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'index'],
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
