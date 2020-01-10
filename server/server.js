var express = require('express');
var cors = require('cors');
var path = require('path');
var axios = require('axios');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/drinkNames', async (req, res) => {
    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Ordinary_Drink')
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.get('/getCategories', async (req, res) => {
    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list', {headers: {
        'Content-Type': 'application/json'}
    })
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.get('/getIngredients', async (req, res) => {
    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list', {headers: {
            'Content-Type': 'application/json'}
    })
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.get('/getGlassware', async (req, res) => {
    axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?g=list', {headers: {
            'Content-Type': 'application/json'}
    })
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.post('/findByGlassware', async (req, res) => {
    let term = req.body.query;
    axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=${term}`, {headers: {
            'Content-Type': 'application/json'}
    })
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.post('/findByCategory', async (req, res) => {
    let term = req.body.query;
    axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=${term}`, {headers: {
            'Content-Type': 'application/json'}
    })
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.post('/findByIngredient', async (req, res) => {
    let term = req.body.query;
    axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${term}`, {headers: {
            'Content-Type': 'application/json'}
    })
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.listen(5170, function () {
    console.log('listening on port 5170!');
});