<template>
  <div>
    <h2>Todo</h2>

    <AddTodo @add-todo="addTodo"/>

    <TodoList
        :todos="todos"
        @remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';

export default {
  data() {
    return {
      todos: [],
    }
  },
  components: {
    TodoList, AddTodo
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          this.todos = json
        })
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
};
</script>
