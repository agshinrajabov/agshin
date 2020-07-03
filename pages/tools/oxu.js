const path = require('path');

module.exports = function(router) {
    router.get('/tools/oxu',function(req,res){
        res.render('tools/oxu');
    });
}