const path = require('path');

module.exports = function(router) {
    router.get('/tools/currency',function(req,res){
        res.render('tools/currency');
    });
}