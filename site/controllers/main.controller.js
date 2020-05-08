const mongoose = require('mongoose')
const Post = mongoose.model('Post')

exports.posts = function (req, res) {
  console.log(req);
  const options = {
    page: req.query.page || 1,
    limit: req.query.limit || 6,
    sort: {created_at: -1, updated_at: -1}
  };
  // Post.paginate({}, options, function(err,posts) {
  //   console.log(posts)
  //   res.render('pages/index.pug', { posts, popularPosts } )
  // })
  var posts = []
  Post.paginate({}, options)
  .then(function(docs) {
    posts = docs
    const popularPostsOptions = {
      page: 1,
      limit: 4,
      sort: {visits: -1}
    }
    return Post.paginate({}, popularPostsOptions)
  })
  .then(function(popularPosts)
    // console.log(popularPosts)
   {
    res.render('pages/index.pug', { posts, popularPosts })

  })
}

exports.postShow = function (req, res) {
  Post.findOneAndUpdate({ _id: req.params.id }, { $inc: { visits:1 } }, {new: true }, function (err, post) {
    res.render('pages/postPage.pug', { post})
  })

}
