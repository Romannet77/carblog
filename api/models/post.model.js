const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const Post = new Schema({
  image: {
    type: String,
    required: [true, 'Не вказано головної картинки']
   },
  title: {
    type: String,
    required: [true, 'Заголовок статті необхідний']
  },
  info: {
    type: String,
    required: [true, 'Введіть автора статті?']
  },
  visits: {
    type: Number,
    default: 0
  },
  intro: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 400
   },
},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } )
Post.plugin(mongoosePaginate);
module.exports = mongoose.model('Post', Post );
