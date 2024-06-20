document.addEventListener('DOMContentLoaded', () => {
  let modal = document.querySelector('#modal');
  let modalLayer = document.querySelector('#modal-layer');
  let modalTitle = modal.querySelector('h3');
  let modalImage = modal.querySelector('img');
  let modalText = modal.querySelector('p');
  let modalClose = modal.querySelector('.close');

  function showModal(event) {
    event.preventDefault();
  
    target = event.target;
    if (target.tagName !== 'A') target = target.parentNode;
    if (target.tagName === 'A') {
      modalTitle.textContent = target.dataset.name;
      modalImage.src = "images/" + target.dataset.imageSource;
      modalText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniadolor.";
      modalLayer.classList.replace('hide', 'show');
      modal.classList.replace('hide', 'show');
    }
  }

  function hideModal(event) {
    event.preventDefault();
    modalTitle.textContent = '';
    modalImage.src = '';
    modalText.textContent = '';
    modalLayer.classList.replace('show', 'hide');
    modal.classList.replace('show', 'hide');
  }

  let team = document.querySelector('#team article');
  team.addEventListener('click', showModal);
  modalClose.addEventListener('click', hideModal);

});