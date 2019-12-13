const path = require('path');
const News = require('../models/news');

module.exports = function(router) {
    router.get('/news',function(req,res){
        News.find({}, (err, data) => !err ? res.render('news',{data: data}): console.log(err));
    });
}