const path = require('path');
const Tool = require('../models/tool');

module.exports = function(router) {
    router.get('/tools',function(req,res){
        res.render('tools');
    });
}