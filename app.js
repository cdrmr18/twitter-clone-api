const express = require("express");
const app = express();
const port = 3000
require('dotenv').config();
const Twitter = require('./api/helpers/twitter.js');
const twitter = new Twitter();

app.get('/tweets', (req,res) => {
    const query = req.query.query
    const max_results = req.query.max_results

    twitter.get(query, max_results).then((response) =>{
            res.status(200).send(response.data)
        }).catch((error)=>{
            res.status(400).send(error);
        })
})

app.listen(port, () => console.log(`Listening on port ${port}`))