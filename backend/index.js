const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const PORT = 5500 | process.env.PORT;

const app = express();
app.use(express.json())
app.use(urlencoded({extended: true}))

mongoose.connect(process.env.CONN_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
});