var express = require('express');
var cors = require('cors');
var path = require('path');
var axios = require('axios');
var app = express();

app.use(cors());
app.use(express.static('./public'));

app.get('/drinkNames', async (req, res) => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.get('/getCategories', async (req, res) => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list', {headers: {
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
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list', {headers: {
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
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list', {headers: {
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