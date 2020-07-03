const path = require('path');

module.exports = function(router) {
    router.get('/tools/fonts',function(req,res){
        res.render('tools/fonts');
    });
}