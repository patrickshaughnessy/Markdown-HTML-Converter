'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var marked = require('marked');

// marked.setOptions({
//   renderer: new marked.Renderer(),
//   gfm: true,
//   tables: true,
//   breaks: false,
//   pedantic: false,
//   sanitize: true,
//   smartLists: true,
//   smartypants: false
// });

// console.log(marked('I am using __markdown__.'));

var app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/', function(req, res){
  res.send(marked(req.body.text));
});

// app.listen(5000);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
