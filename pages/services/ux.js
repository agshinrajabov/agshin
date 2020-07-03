const path = require('path');

module.exports = function(router) {
    router.get('/services/ux',function(req,res){
        res.render('services/ux');
    });
}