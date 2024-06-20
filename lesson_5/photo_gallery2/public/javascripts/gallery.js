document.addEventListener('DOMContentLoaded', () => {
  let photosTemplate = Handlebars.compile(document.querySelector('#photos').innerHTML);
  let photoInfoTemplate = Handlebars.compile(document.querySelector('#photo_information').innerHTML);

  let request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/photos');  
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    if (request.status === 200) {
      let photos = request.response;

      console.log(photos);

      let slides = document.querySelector('#slides');
      slides.insertAdjacentHTML('beforeend', photosTemplate({photos: photos}));

      
    }
  }

});