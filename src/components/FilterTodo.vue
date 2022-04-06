<template>
  <select v-model="filter">
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
  watch: {
    filter(option) {
      this.$emit('filtered', option);
    }
  }
}
</script>

<style scoped>

</style>
