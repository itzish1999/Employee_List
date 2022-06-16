const express = require ("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: 'http://localhost:8001'
};

app.use(cors(corsOptions));
const db = require('./models');

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and re-sync db.');
});
// parses requests of content-type - application/json
app.use(bodyParser.json());
// parses requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the employee app'})
});
// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});