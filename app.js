const path = require('path');
const fs = require('fs');

const express = require('express');


// routes
const routes = require('./routes/routes');


const app = express();

app.set('views', 'views');

// static file server
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(3000);