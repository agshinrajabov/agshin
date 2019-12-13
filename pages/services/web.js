const path = require('path');

module.exports = function(router) {
    router.get('/services/web',function(req,res){
        res.render('services/web');
    });
}