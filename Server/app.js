const express = require('express');
const app = express();
const body_parser = require('body-parser');
const morgan = require('morgan');

app.use(body_parser.urlencoded({
  extended: true
}));
app.use(body_parser.json());
app.use(morgan('common'));
app.use('/', express.static('./dist/Server'));

app.listen(80)
