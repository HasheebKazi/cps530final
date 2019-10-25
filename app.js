const path = require('path');
const fs = require('fs');
const https = require('https');

const express = require('express');


// routes
// const routes = require('./routes/');


const app = express();

app.set('views', 'views');

// static file server
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(3000);