const express = require("express");
const app = express();
const port = 3000
const axios = require('axios');

app.get('/tweets', (req,res) => {
    console.log(req.query)
    const query = req.query.query
    const max_results = req.query.max_results

    axios.get("https://api.twitter.com/2/tweets/search/recent",  {
        params: {
            query: query,
            max_results: max_results
        },
        headers: {
            "Authorization": ""
        }
    }).then((response) =>{
            res.status(200).send(response.data)
        }).catch((error)=>{
            res.status(400).send(error);
        })
})

app.listen(port, () => console.log(`Listening on port ${port}`))


