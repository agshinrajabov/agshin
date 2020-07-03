//Requires
const express = require('express');
const compression = require('compression');
const path = require('path');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended:false});

const directory = path.join(__dirname, '/images');

//Helpers
const hbs = require('./utils/hbs');
const app = express();
const router = express.Router();

//Routers
const home = require('./pages/home');
const work = require('./pages/work');
const tools = require('./pages/tools');
const news = require('./pages/news');
const hire = require('./pages/hire');
const coach = require('./pages/coach');

//Services
const ux = require('./pages/services/ux');
const web = require('./pages/services/web');
const mobile = require('./pages/services/mobile');
const branding = require('./pages/services/branding');

//Tools
const oxu = require('./pages/tools/oxu');
const currency = require('./pages/tools/currency');
const fonts = require('./pages/tools/fonts');

//Admin
// const adminHome = require('./pages/admin/app');

//View Settings
app.use('/assets', express.static('./dist'));
app.use('/adassets', express.static('./admin'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine);
app.set('views', path.join(__dirname, "views"));
app.use('/images', express.static(directory));


//Pages
home(router);
work(router);
tools(router);
news(router);
hire(router);
coach(router);

//Services
ux(router);
mobile(router);
web(router);
branding(router);

//Tools
oxu(router);
currency(router);
fonts(router);

// //Admin
// adminHome(router);


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


  
app.post('/together', urlencodedParser, (req,res) => {
    const user = {
        services: req.body['services[]'],
        name: req.body.name,
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

});

//Settings
app.use('/', router);
app.use(compression());
app.get('*', (req, res) => {    
  res.redirect('/');
})

app.listen(process.env.PORT || 6555);