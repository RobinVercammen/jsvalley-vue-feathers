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
export default {
  methods: {
    createUser($event) {
      const email = $event.target['email-form'].value;
      const password = $event.target['password-form'].value;
      
    },
  },
};

</script>
