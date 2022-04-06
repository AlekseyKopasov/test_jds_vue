<template>
  <div>
    <h2>Todo</h2>
    <router-link to="/">Home Page</router-link>

    <AddTodo @add-todo="addTodo"/>

    <FilterTodo />

    <Loader v-if="loading" />

    <TodoList
        v-else-if="filteredTodos.length"
        :todos="filteredTodos"
        v-model="fillter"
        @remove-todo="removeTodo"
        @filtered="filtered"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import Loader from '@/components/Loader';
import FilterTodo from '@/components/FilterTodo';

export default {
  data() {
    return {
      todos: [],
      loading: true,
      fillter: 'all'
    }
  },
  components: {
    TodoList, AddTodo, Loader, FilterTodo
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          this.todos = json;
          this.loading = false;
        });
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    filtered(option) {
      this.filter = option;
      console.log(option)
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }

      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed);
      }

      if (this.filter === 'active') {
        return this.todos.filter(t => !t.completed);
      }

      return this.todos;
    }
  }
};
</script>
