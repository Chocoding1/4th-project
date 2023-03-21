const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('자 드가자~');
})

app.listen(port, () => {
    console.log('Connection complete');
})