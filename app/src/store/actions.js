import api from '../common/api';

const loadItemsAsync = (context) => {
  const itemsservice = api.service('items');
  return itemsservice.find().then((items) => {
    context.commit('loadItems', items.data);
  });
};

const addItemAsync = (context, $event) => {
  const text = $event.target.item.value;
  const itemsservice = api.service('items');
  return itemsservice.create({ text }).then(() => {
    context.dispatch('loadItemsAsync');
  });
};

export default { loadItemsAsync, addItemAsync };
