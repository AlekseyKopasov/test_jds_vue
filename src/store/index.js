import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    filteredTodos: [],
    loading: true
  },
  getters: {
    getTodos(state) {
      return state.filteredTodos;
    },
    getLoading(state) {
      return state.loading;
    },
  },
  actions: {
    async fetchTodos({ commit }, limit = 5) {
      await fetch('https://jsonplaceholder.typicode.com/todos?_limit=' + limit).
        then((res) => res.json()).
        then((todos) => {
          commit('updateTodos', {todos});
          commit('updateLoading', false);
      });
    },
    filteredTodos({ commit }, filter = 'all') {
      let todos = this.state.todos;
      commit('updateTodos', {todos, filter});
    },
  },
  mutations: {
    updateTodos(state, {todos, filter = 'all'}) {
      state.todos = todos;

      if (filter === 'all') {
        state.filteredTodos = todos;
      }

      if (filter === 'completed') {
        state.filteredTodos = state.todos.filter(t => t.completed);
      }

      if (filter === 'active') {
        state.filteredTodos = state.todos.filter(t => !t.completed);
      }
    },
    updateLoading(state, bool) {
      state.loading = bool;
    },
    removeTodo(state, id) {
      state.filteredTodos = state.todos.filter(t => t.id !== id);
    },
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    clearCompletedTodo(state) {
      const hasCompleted = state.todos.some(t => t.completed);

      if (hasCompleted) {
        state.filteredTodos = state.todos = state.todos.filter(t => !t.completed);
      }
    },
    changeStatusTodo(state, id) {
      state.filteredTodos = state.todos.map(t => {
        if (t.id === id) {
          t.completed = !t.completed;
        }
      });
    }
  }
});
