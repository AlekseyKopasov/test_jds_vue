<template>
  <div>
    <h2>Todo</h2>
    <router-link to="/">Home Page</router-link>

    <AddTodo @add-todo="add"/>

    <FilterTodo />
    <button @click="clear">Clear Completed</button>

    <Loader v-if="loading" />
    <TodoList
        v-else-if="allTodos.length"
        :todos="allTodos"
        @remove-todo="remove"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import Loader from '@/components/Loader';
import FilterTodo from '@/components/FilterTodo';

export default {
  components: {
    TodoList, AddTodo, Loader, FilterTodo
  },
  mounted() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(['fetchTodos']),
    ...mapMutations(['removeTodo', 'addTodo', 'clearCompletedTodo']),
    remove(id) {
      this.removeTodo(id);
    },
    add(newTodo) {
      this.addTodo(newTodo);
    },
    clear() {
      this.clearCompletedTodo();
    },
  },
  computed: {
    ...mapGetters(['getTodos', 'getLoading']),
    allTodos() {
      return this.getTodos;
    },
    loading() {
      return this.getLoading;
    }
  }
};
</script>
