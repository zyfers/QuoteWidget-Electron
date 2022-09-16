const request = require('request')

setInterval(function () {
    request('https://type.fit/api/quotes', function (err, response, body) {
        let bodyJson = JSON.parse(body);
        let num = Math.floor(Math.random() * 100)
        let randomQuote = bodyJson[num]["text"]
        document.getElementById("quote").innerHTML = randomQuote
    })
}, 5000)