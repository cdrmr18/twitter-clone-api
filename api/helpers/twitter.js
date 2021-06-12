const axios = require('axios');

class Twitter {
    get(query, max_results) {
        return axios.get("https://api.twitter.com/2/tweets/search/recent",  {
            params: {
                query: query,
                max_results: max_results
            },
            headers: {
                "Authorization": `Bearer ${process.env.TWITTER_API_TOKEN}`
            }
        })
    }
}

module.exports = Twitter;