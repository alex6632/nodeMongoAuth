// Configurer le serveur
let express = require('express');
let port = 8080;
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let front = require('./routes/front');
let api = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use('/', front);
app.use('/api', api);

app.listen( port, () => console.log('Le serveur est lancé sur le port ' + port) );