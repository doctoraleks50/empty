const express = require("express");
const bodyParser = require("body-parser");
const PORT = (require('config').get('port'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./src/routes'));

app.use((req, res) => res.status(404).send({
    status: 404
}));

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
