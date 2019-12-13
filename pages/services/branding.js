const path = require('path');

module.exports = function(router) {
    router.get('/services/branding',function(req,res){
        res.render('services/branding');
    });
}