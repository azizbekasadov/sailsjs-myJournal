module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'GET /posts': 'PostController.posts',
  'GET /post/:postId': 'PostController.findById',
  'POST /post': 'post/create-post',
  'DELETE /post/:postId': 'PostController.delete',
  'GET /home': 'post/home'
};

// HTTP Method => POST 
