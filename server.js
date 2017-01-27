var express = require('express');
var logger = require('morgan');
var path = require('path');
var compression = require('compression');


var port = process.argv[2];

// var baseUrl = process.argv[3]

//Inspired from gulp-starter project in github
var settings = {
    root: path.resolve(process.cwd(), './build'),
    port: port || 8080,
    logLevel: 'dev',
    staticOptions: {
        extensions: ['html'],
        maxAge: '31556926'
    }
};

var executeServer = function () {
    var app = express()
    app.use(compression())
        .use(logger())

    app.use('/static', express.static(settings.root, settings.staticOptions));

    app.get("/health", function(req, res) {
        res.sendStatus(200)
    })

    app.get("/*", function (req, res) {
        var protocol = req.headers['x-forwarded-proto']
        console.log('protocol: ' + protocol)
        if(protocol && protocol.indexOf('https') <0){
            res.redirect("https://" + req.headers.host + req.url)
        }else{
            res.sendFile(__dirname + '/build/index.html');
        }
    });

    app.listen(port);
    console.log("server starting")
};

executeServer();

