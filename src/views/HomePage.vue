<template>
  <div>
    <h2>Тестовое задание "to-do лист"</h2>
    <p></p>
    <router-link class="link" to="/todos">Go!</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.link {
  display: block;
  width: max-content;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 10px 20px;
  font-size: 18px;
  border: 1px solid #2c3e50;
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease, background-color 0.4s ease;
}

.link:hover {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
}

</style>
