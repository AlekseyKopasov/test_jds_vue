import Vue from 'vue';
import Vuex from 'vuex';
import {re} from '@babel/core/lib/vendor/import-meta-resolve'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    loading: true
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getLoading(state) {
      return state.loading;
    },
  },
  actions: {
    async fetchTodos({ commit }, limit = 5) {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=' + limit);
      const todos = res.json();
      commit('updateTodos', todos);
      commit('updateLoading', false);
    },
    filteredTodos({ commit, dispatch }, filter) {
      const todos = this.state.todos;

      if (!todos.length) {
        console.log(42)
        dispatch('fetchTodos');
      } else {
        commit('updateTodos', filter);
      }
    },
  },
  mutations: {
    updateTodos(state, todos, filter = 'all') {
      if (filter === 'all') {
        state.todos = todos;
      }

      if (filter === 'completed') {
        state.todos = state.todos.filter(t => t.completed);
      }

      if (filter === 'active') {
        state.todos = state.todos.filter(t => !t.completed);
      }
    },
    updateLoading(state, bool) {
      state.loading = bool;
    },
  }
});
