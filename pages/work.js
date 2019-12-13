const path = require('path');
const Works = require('../models/works');

module.exports = function(router) {
    router.get('/works',function(req,res){
       Works.find({}, (err, data) => !err ?  res.render('works', {data: data}) : console.log(err));
    });
}