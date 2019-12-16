// const path = require('path');
// const bodyParser = require('body-parser')
// const urlencodedParser = bodyParser.urlencoded({extended:false});
// const mongoose = require('../../utils/mongoose');
// const multer = require('multer');   
// const slug = require('limax');

// const storage = multer.diskStorage({
//     destination: function(req,file,cb) {
//         cb(null, './images');
//     },
//     filename: function(req,file,cb) {
//         cb(null, "agshin_" + file.originalname);
//     }
// });

// const upload = multer({ storage: storage, limits: {
//     fileSize: 1024 * 1024 * 5
//     } 
// });

// //Schema
// const Tool = require('../../models/tool');
// const News = require('../../models/news');
// const Works = require('../../models/works');

// module.exports = function(router) {

//     router.get('/roxanne',function(req,res){
//         res.render('admin/offers');
//     });

//     router.post('/roxanne/tools', upload.single('toolLogo'), urlencodedParser, function(req,res){
//         const sample = {
//             name: req.body.toolName,
//             link: slug(req.body.toolName),
//             description: req.body.toolDescription,
//             logo: req.file.path,
//             details: req.body.toolDetails,
//             getParameters: {
//                 link: req.body.parametrLink,
//                 area: req.body.parametrArea,
//                 description: req.body.parametrDescription,
//                 type: req.body.parametrType,
//                 head: req.body.parametrHead,
//                 required: req.body.parametrRequired,
//                 request: req.body.request,
//                 response: req.body.response
//             },
//             postParameters: {
//                 link: req.body.postParametrLink,
//                 area: req.body.postParametrArea,
//                 description: req.body.postParametrDescription,
//                 type: req.body.postParametrType,
//                 head: req.body.postParametrHead,
//                 required: req.body.postParametrRequired,
//                 request: req.body.postRequest,
//                 response: req.body.postResponse
//             }
//         }
//         const tool = new Tool(sample);
//         tool.save((err) => !err ? console.log('clear') : console.log(err)); 
//         res.render('admin/index');
//     });

//     router.get('/roxanne/tools',function(req,res){
//         Tool.find({}, (err, data) => {
//             res.render('admin/index', {data: data});
//         })    
//     });

//     router.get('/roxanne/works',function(req,res){
//         Works.find({}, (err, data) => {
//             res.render('admin/works', {data:data});
//         });
//     });

//     router.post('/roxanne/works', upload.fields([
//         {name: 'workImage', maxCount:1}, {name: 'workHoverImage', maxCount:1}, 
//     ]), urlencodedParser,  (req,res) => {
//         const sample = {
//             name: req.body.workName,
//             description: req.body.workDescription,
//             image: req.files.workImage[0].path,
//             hoverImage: req.files.workHoverImage[0].path,
//             link: req.body.workLink,
//             process: req.body.workProccess,
//         }
//         const works = new Works(sample);
//         works.save((err) => !err ? console.log('clear') : console.log(err)); 
//         res.render('admin/works');
//     });

//     router.get('/roxanne/news',function(req,res){
//         News.find({}, (err, data) => {
//             res.render('admin/news', {data:data});
//         });
//     });

//     router.post('/roxanne/news',urlencodedParser, function(req,res){
//         const sample = {
//             title: req.body.newsTitle,
//             description: req.body.newsDescription,
//             company: req.body.newsCompany,
//             link: req.body.newsLink,
//         }
//         const news = new News(sample);
//         news.save((err) => !err ? console.log('clear') : console.log(err)); 
//         res.render('admin/news');
//     });
// }