module.exports.routes = {
  '/': { view: 'pages/homepage' },
  '/posts': 'PostController.posts', //{ view: 'PostController.posts' },
  '/findById/:postId': 'PostController.findById',
  '/create':'PostController.create'
};
