const express = require('express');

const app = express();

const HTTP_PORT = 8080;

app.get('/', (req, res) => {
    res.send('Anurag Balu - 167000223');
});

app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));

module.exports = app;