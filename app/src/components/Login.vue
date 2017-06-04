<template>
  <form v-on:submit.prevent="login">
    <div>
      <input name="email-form" type="email">
    </div>
    <div>
      <input name="password-form" type="password">
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
    or
    <div>
      <router-link tag="button" :to="{name:'Register'}">
        Registeren
      </router-link>
    </div>
  </form>
</template>

<script>
import client from '../common/api';

export default {
  methods: {
    login($event) {
      const email = $event.target['email-form'].value;
      const password = $event.target['password-form'].value;

      client.authenticate({
        strategy: 'local',
        email,
        password,
      }).then(() => {
        this.$router.push({ name: 'Items' });
      }, console.log);
    },
  },
};
</script>

