const mongoose = require('mongoose');
mongoose.connect('mongodb://agshinrajabov:MessiRonaldo2029!!@ds353738.mlab.com:53738/agshin',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB!')
}).catch( (err) => {
    console.log('Failed' + err)
});
mongoose.set('useFindAndModify', false);
module.exports = mongoose;