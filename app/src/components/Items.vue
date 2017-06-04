<template>
  <ul>
    <li v-for="item in items">{{item.text}}</li>
    <form v-on:submit.prevent="addItemAsync">
      <input type="text" name="item">
      <button type="submit"></button>
    </form>
  </ul>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import api from '../common/api';

export default {
  created() {
    const itemsservice = api.service('items');
    itemsservice.on('created', () => {
      this.$store.dispatch('loadItemsAsync').then(() => {
      });
    });
    this.$store.dispatch('loadItemsAsync');
  },
  methods: {
    ...mapActions(['addItemAsync']),
  },
  computed: {
    ...mapState(['items']),
  },
};
</script>
