const loadItems = (state, items) => {
  const x = state;
  x.items = items;
  return x;
};

export default { loadItems };
