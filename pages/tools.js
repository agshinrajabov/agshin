const path = require('path');
const Tool = require('../models/tool');

module.exports = function(router) {
    router.get('/tools',function(req,res){
        Tool.find({}, (err, data) => {
            res.render('tools', {data:data});
        })
    });

    router.get('/tools/:link', (req,res) => {
        const link = req.params.link;
        Tool.findOne({link: link}, (err,data) => !err ? res.render('api', {data:data}) : console.log(err));
    })
}