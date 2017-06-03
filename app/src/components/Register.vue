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
import feathers from 'feathers-client';


export default {
  methods: {
    createUser($event) {
      const email = $event.target['email-form'].value;
      const password = $event.target['password-form'].value;

      const client = feathers()
        .configure(feathers.hooks())
        .configure(feathers.rest('http://localhost:3030').fetch(window.fetch.bind(window)));
      const users = client.service('users');
      users.create({ email, password }).then(console.log, console.log);
    },
  },
};

</script>
