<template>
  <div class="todos">
    <router-link class="link" to="/">Home Page</router-link>

    <AddTodo @add-todo="add"/>

    <div class="todos__filters">
      <FilterTodo />
      <button @click="clear">Clear Completed</button>
      <span class="todos__count">Total posts: {{ allTodos.length }}</span>
    </div>

    <Loader v-if="loading" />
    <TodoList
        v-else-if="allTodos.length"
        :todos="allTodos"
        @remove-todo="remove"
    />
    <p class="todos__no-todos" v-else>No todos!</p>
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
    if (!this.allTodos.length) {
      this.fetchTodos();
    }
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

<style>
.todos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

.todos__filters {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.todos__filters button {
  padding: 10px;
  margin-right: 15px;
  font-size: 16px;
  font-weight: 600;
  color: #820d1f;
  border: 1px solid #820d1f;
  background-color: transparent;
  cursor: pointer;
  transition: border-color 0.4s ease, background-color 0.4s ease, color 0.4s ease;
}

.todos__filters button:hover {
  border-color: #49820d;
  background-color: #49820d;
  color: #ffffff;
}

.todos__count {
  font-size: 22px;
  font-weight: 800;
}

.todos__no-todos {
  font-size: 30px;
  font-weight: 800;
  color: #820d1f;
}
</style>
