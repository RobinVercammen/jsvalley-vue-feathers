<template>
  <form v-on:submit.prevent="createUser">
    <div>
      <input name="email-form" type="email">
    </div>
    <div>
      <input name="password-form" type="password">
    </div>
    <div>
      <button type="submit">Creat user</button>
    </div>
  </form>
</template>
<script>
import client from '../common/api';

export default {
  methods: {
    createUser($event) {
      const email = $event.target['email-form'].value;
      const password = $event.target['password-form'].value;
      const users = client.service('users');
      users.create({ email, password }).then(console.log, console.log);
    },
  },
};

</script>
