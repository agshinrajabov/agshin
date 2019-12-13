const path = require('path');

module.exports = function(router) {
    router.get('/services/mobile',function(req,res){
        res.render('services/mobile');
    });
}