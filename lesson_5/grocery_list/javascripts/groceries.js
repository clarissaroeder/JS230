document.addEventListener('DOMContentLoaded', () => {
  let groceries = document.querySelector('#grocery-list');

  let form = document.querySelector('form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    let data = new FormData(form);
    let item = data.get('name');
    let quantity = data.get('quantity') || 1;

    let li = document.createElement('li');
    li.textContent = `${quantity} ${item}`;
    groceries.append(li);
    form.reset();
  });
});