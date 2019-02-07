// src/plugins/init_sortable.js
import Sortable from 'sortablejs';

const initSortable = () => {
  const list = document.querySelector('#results');
  Sortable.create(list);
};

export { initSortable };
