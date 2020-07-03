const path = require('path');

module.exports = function(router) {
    router.get('/coaching',function(req,res){
        res.render('coach');
    });
}