const mongoose = require('mongoose')
const Post = mongoose.model('Post')

exports.mainPage = function  (req, res)  {
  Post.find({},function(err,posts) {
      res.render('pages/manager.post.listing.pug', { posts, pageTitle: "Лістинг постів" })
  })

}
exports.createPostPage = function (req, res) {
  res.render('pages/manager.post.form.pug', { pageTitle: "Новий пост" })
}
exports.editPostPage = function (req, res) {
    Post.findOne({_id: req.params.id},function(err,post) {
      res.render('pages/manager.post.form.pug', { pageTitle: "Редагування запису", post })
    })
}
