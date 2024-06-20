let inventory;

(function() {
  inventory = {


    updateItem() {
      
    },

    bindEvents() {
      document.querySelector('#add_item').addEventListener('click', this.newItem.bind(this));
      document.querySelector('#inventory').addEventListener('click', this.deleteItem.bind(this));
      document.querySelector('#inventory').addEventListener('focusout', this.updateItem.bind(this));
    },

    init() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  inventory.init.bind(inventory)();
});