<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import client from './common/api';

export default {
  name: 'app',
  created() {
    const accessToken = localStorage.getItem('feathers-jwt');
    client.authenticate({
      strategy: 'jwt',
      accessToken,
    }).then(() =>
      this.$router.push({ name: 'Items' })
      , () => this.$router.push({ name: 'Login' }));
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
