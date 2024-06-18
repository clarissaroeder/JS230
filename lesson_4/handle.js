$(() => {
  let posts = [];

  let post = {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  };

  post.body = '<p>' + post.body + '</p>';
  post.tags = ['Food', 'Cooking', 'Veggies'];

  posts.push(post);

  let secondPost = {
    title: 'Second Post',
    published: 'June 18, 2024',
    body: 'I love penguins.'
  }

  posts.push(secondPost);

  let postTemplate = Handlebars.compile($('#post').html());
  let tagTemplate = Handlebars.compile($('#tag').html());
  Handlebars.registerPartial('tagTemplate', $('#tag').html());

  // JavaScript:
  // let postTemplate = Handlebars.compile(document.getElementById('post).innerHTML);

  $('body').append(postTemplate({ posts: posts}));
});