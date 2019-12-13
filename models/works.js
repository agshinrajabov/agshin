const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const work = new Schema({
    name: String,
    description: String, 
    image: String, 
    hoverImage: String, 
    link: String, 
    process: String, 
    created: Date,
})

work.pre('save', function(next) {
    var current = new Date();
    this.created = current;
    next();
})

const Works = mongoose.model('Works', work);


module.exports = Works;