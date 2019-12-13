const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const news = new Schema({
    title: String,
    link: String,
    description: String, 
    company: String, 
    created: Date,
})

news.pre('save', function(next) {
    var current = new Date();
    this.created = current;
    next();
})

const News = mongoose.model('News', news);


module.exports = News;