var exphbs  = require('express-handlebars');
var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        striptags: function (txt) { 
            if(typeof txt == "undefined") return;
            var regexp = /<\/?[^>]+(>|$)/g
            return txt.replace(regexp, '').substring(0,120) + "...".trim();
        },
        eq: function() {
            const args = Array.prototype.slice.call(arguments, 0, -1);
            return args.every(function (expression) {
                return args[0] === expression;
            });
        },

        oEmpty: function(value) {
            if(value == "") {
                return false;
            } else {
                return true;
            }
        },

        switch: function(value, options) {
            this._switch_value_ = value;
            var html = options.fn(this); // Process the body of the switch block
            delete this._switch_value_;
            return html;
        },
        case: function(value, options) {
            if (value == this._switch_value_) {
            return options.fn(this);
            }
        },
        upperExten: function(file) {
            return file.split('.').pop().toUpperCase();
        },
        lowerExten: function(file) {
            return file.split('.').pop();
        }
    },
    partialsDir: [
        "views/part"
    ], 
    extname: 'hbs',
    layoutsDir: 'views',
    defaultLayout: false
});

module.exports = hbs


// "area": "Post1",
// "description": "Post2",
// "type": "Post3",
// "head": "Post4",
// "request": "<p>12214<\/p>",
// "response": "<p>124214<\/p>"
