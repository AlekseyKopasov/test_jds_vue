<template>
  <div>
    <h2>Todo</h2>
    <router-link to="/">Home Page</router-link>

    <AddTodo @add-todo="addTodo"/>

    <FilterTodo @selected-option="selectedOption" />
    <button @click="clearCompletedTodo">Clear Completed</button>
    <Loader v-if="loading" />
    <TodoList
        v-else-if="filtered.length"
        :todos="allTodos"
        @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import Loader from '@/components/Loader';
import FilterTodo from '@/components/FilterTodo';

export default {
  data() {
    return {
      filter: 'all'
    }
  },
  components: {
    TodoList, AddTodo, Loader, FilterTodo
  },
  mounted() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(['fetchTodos', 'filteredTodos']),
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    selectedOption(option) {
      this.filter = option;
    },
    clearCompletedTodo() {
      const hasCompleted = this.todos.some(t => t.completed);

      if (hasCompleted) {
        this.todos = this.todos.filter(t => !t.completed);
      }
    },
  },
  computed: {
    ...mapGetters(['getTodos', 'getLoading']),
    allTodos() {
      return this.getTodos;
    },
    loading() {
      return this.getLoading;
    },
    filtered() {
      return this.filteredTodos(this.filter);
    }
  }
};
</script>
