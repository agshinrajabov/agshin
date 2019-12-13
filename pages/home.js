const path = require('path');

module.exports = function(router) {
    router.get('/',function(req,res){
        res.render('index');
    });

    router.get('/services',function(req,res){
        res.redirect('/');
    });

    router.get('/api',function(req,res){
        res.render('api');
    });
}