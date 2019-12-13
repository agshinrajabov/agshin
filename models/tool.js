const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tool = new Schema({
    name: String,
    link: String,
    description: String, 
    logo: String, 
    details:String,
    created: Date,
    getParameters: Object,
    postParameters: Object
})

tool.pre('save', function(next) {
    var current = new Date();
    this.created = current;
    next();
})

const Tools = mongoose.model('Tools', tool);


module.exports = Tools;