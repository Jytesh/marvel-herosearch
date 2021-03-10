const fetch = require('node-fetch')

class marvelAPI {
    constructor() {
        return this;
    }
    fetchCharacter = async(value) => {
        return (this.fetch(`characters?nameStartsWith=${value}`))
    }
    fetch = async(value) => {
        return new Promise((resp,rej) => {
            fetch(`https://gateway.marvel.com:443/v1/public/${value}&apikey=837ec1513993ed3b2fe176cf44496148`, {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                    "if-none-match": "e614cead3c695aa98627932bd5c4d430b19c2aa2",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site",
                    "sec-gpc": "1",
                    "origin": "https://developer.marvel.com"
                },
                "referrer": "https://developer.marvel.com/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET",
                "mode": "cors",
                "credentials": "omit"
                })
                .then(async (res) => {
                    const text = await res.text()
                    const data = JSON.parse(text);
                    return resp(data)
                }).catch(rej)
        })
    }
}

export default (new marvelAPI());