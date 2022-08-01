var express = require('express');
var app = express();
const PORT = process.env.PORT || 5050
const { employees } = require('./handlers/employees')

app.get('/employees', employees);
app.get('/', (req, res) => {
    res.send('This is my project')
})

app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`); });