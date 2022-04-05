<template>
  <li>
    <span :class="{ done: todo.completed }">
      <input
          type="checkbox"
      >
      <strong>{{ index + 1 }}</strong>
      {{ todo.title }}
    </span>
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
