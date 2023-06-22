const express = require ('express');

const app = express ();

app.get("/",(request, response) => {

    if (err) {
        response.status(500).send('sorry, out of order')
    }

    readFile("./home.html", 'utf8', (err, html)=> {
        response.send(html);
    })

});

app.listen(process.env.PORT || 3000, ()=> console.log('app available'))