const express = require('express');
const layouts = require('layouts');

const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'))

app.use(expressLayouts);
app.set('layout extractStyles', true)
app.set('layout extractScripts', true);


// use express router
app.use('/', require('./routes'));


// setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err) {
    if(err){
        console.log(`the error is ${err}`)
    }

    console.log(`Server is up and running on port ${port}`)
});
