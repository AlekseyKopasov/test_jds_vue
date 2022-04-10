<template>
  <div class="todo-list">
    <ul class="todo-list__list">
      <transition-group name="list" tag="li" appear>
        <TodoItem
            v-for="(todo, index) in todos"
            :key="todo.id"
            :todo="todo"
            :index="index"
            @remove-todo="removeTodo"
        />
      </transition-group>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id);
    },
  },
}
</script>

<style scoped>
  .todo-list {
    width: 100%;
    font-size: 18px;
    padding-bottom: 50px;
  }

  .todo-list__list {
    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }

  .list-enter-active, .list-leave-active {
    transition: all 0.4s;
  }
  .list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateX(-30px);
  }
</style>
