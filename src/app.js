const express = require("express");
const port = process.env.PORT || 3000;
//Create app and use body-parser
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Allow cross orgin requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(require('./routes'));


app.listen(port, () => {
    console.log(`Touch and Go started. vist http://localhost:${port}`)
})