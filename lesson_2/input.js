document.addEventListener('DOMContentLoaded', () => {
  let textfield = document.querySelector('.text-field');
  let cursorId;

  textfield.addEventListener('click', event => {
    event.stopPropagation();
    textfield.classList.add('focused');

    if (!cursorId) {
      cursorId = setInterval(() => {
        textfield.classList.toggle('cursor');
      }, 500);
    }
  });

  document.addEventListener('click', event => {
    clearInterval(cursorId);
    cursorId = null;
    textfield.classList.remove('focused');
    textfield.classList.remove('cursor');
  });

  document.addEventListener('keydown', event => {
    if (textfield.classList.contains('focused')) {
      let content = textfield.querySelector('.content')

      if (event.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, -1);
      } else {
        content.textContent += event.key;
      }
    }
  });

});