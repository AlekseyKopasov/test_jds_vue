<template>
  <select class="filter" v-model="filter" @change="change">
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="active">Active</option>
  </select>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FilterTodo',
  data() {
    return {
      filter: 'all'
    }
  },
  methods: {
    ...mapActions(['filteredTodos']),
    change(evt) {
     this.filter = evt.target.value;
     this.filteredTodos(this.filter);
    }
  }
}
</script>

<style scoped>
  .filter {
    margin-right: 15px;
    padding: 10px;
    font-size: 16px;
  }
</style>
