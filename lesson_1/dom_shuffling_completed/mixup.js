let body = document.body;

let main = body.getElementsByTagName('main')[0];
let header = body.getElementsByTagName('header')[1];

body.insertBefore(header, main);

let heading1 = main.getElementsByTagName('h1')[0];
header.insertAdjacentElement("afterbegin", heading1);

let [ chinstickFigure, babyFigure] = main.querySelectorAll('figure');
let babyimg = chinstickFigure.querySelector('img');
let chinstickimg = babyFigure.querySelector('img');

chinstickFigure.insertBefore(chinstickimg, chinstickFigure.firstChild);
babyFigure.insertBefore(babyimg, babyFigure.firstChild);

let article = main.querySelector('article');
article.appendChild(chinstickFigure);
article.appendChild(babyFigure);