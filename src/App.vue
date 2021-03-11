<template>
  <div id="app">
    <List />
  </div>
</template>

<script>
import List from './components/list.vue'

export default {
  name: 'App',
  components: {
    List
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
