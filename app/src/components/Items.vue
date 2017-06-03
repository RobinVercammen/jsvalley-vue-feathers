<template>
  <ul>
    <li v-for="item in items">{{item}}</li>
    <form v-on:submit.prevent="add">
      <input type="text" name="item">
      <button type="submit"></button>
    </form>
  </ul>
</template>
<script>
import api from '../common/api';

export default {
  created() {
    const itemsservice = api.service('items');
    itemsservice.on('created', () => {
      itemsservice.find().then((items) => {
        console.log(items);
        this.items = items.data.map(i => i.text);
      });
    });

    this.items = ['bla'];
  },
  data: () => ({
    items: ['test', 'test'],
  }),
  methods: {
    add($event) {
      const text = $event.target.item.value;
      const itemsservice = api.service('items');
      itemsservice.create({ text });
    },
  },
};
</script>
