const path = require('path');
const Works = require('../models/works');

module.exports = function(router) {
    router.get('/works',function(req,res){
        res.render('works');
    });
}