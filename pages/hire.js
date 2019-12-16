const path = require('path');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended:false});
const nodemailer = require("nodemailer");

async function main(html) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Yandex',
      auth: {
        user: 'rajabov@agsh.in', // generated ethereal user
        pass: 'Aksin2007!!' // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Agshin Rajabov 👻" <rajabov@agsh.in>', // sender address
      to: "rajabov@agsh.in", // list of receivers
      subject: "Let's Work Together / Agsh.In", // Subject line
      html: html // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }


module.exports = function(router) {
    router.get('/hire',function(req,res){
        res.render('hire', {message: 'Let’s work together'});
    });



    router.post('/hire', urlencodedParser, (req,res) => {
        const user = {
            name: req.body.name,    
            services: req.body.hireServices,
            email: req.body.email,
            message: req.body.message   
        }

        const output = `
        <p>Heyo Ako! You have a new contract request</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${user.name}</li>
          <li>Email: ${user.email}</li>
          <li>Services: ${user.services}</li>
        </ul>
        <h3>Message</h3>
        <p>${user.message}</p>`;
    
        main(output).catch(console.error);
        
        res.render('hire', {message: 'Your message was sent!'});

    });
}