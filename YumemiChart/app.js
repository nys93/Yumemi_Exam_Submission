var express = require('express'); 
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('express로 웹서버를 실행함 --> '+ app.get('port'));
});
