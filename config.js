var express = require('express');
module.exports = function(app, io) {
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);
    app.set('views', __dirname + '/views');
    app.use(express.static(__dirname + '/public'));
};