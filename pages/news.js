const path = require('path');
const News = require('../models/news');

module.exports = function(router) {
    router.get('/news',function(req,res){
        res.render('news');
    });
}