<template>
  <select v-model="filter" @change="change">
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="active">Active</option>
  </select>
</template>

<script>
export default {
  name: 'FilterTodo',
  data() {
    return {
      filter: 'all'
    }
  },
  methods: {
    change(evt) {
     this.filter = evt.target.value;
     this.$emit('selected-option', this.filter);
    }
  }
}
</script>

<style scoped>

</style>
