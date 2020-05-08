module.exports = function (app) {
  const controller = require('../controllers/manager.controller.js')
  app.get('/manager', controller.mainPage)
  app.get('/manager/newpost', controller.createPostPage)
  app.get('/manager/posts-edit/:id', controller.editPostPage)
}
