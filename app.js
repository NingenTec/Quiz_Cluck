const express = require("express");
//Requiring express package
const path = require("path");
const cookieParser = require('cookie-parser')
//Defining cookie parser for use
const logger = require("morgan");
//Requiring morgan package
const bodyParser = require('body-parser')
const app = express();
const env = require('dotenv').config()
const request = express.request;



//Routes
const indexCluckRouter = require("./routes/index");
const cluckRouter = require("./routes/cluck")

//Views setup
app.set("view", path.join(__dirname, "view"));
app.set("view engine", "ejs");


app.use(logger("dev"));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(function(_request, _res, _next){
    console.log("cookies", request.cookies);
    const username = request.cookies.username;
    res.locals.signInUser = username || "";
    next();
});

//Middleware
app.use("/", indexCluckRouter);
app.use("/cluck", cluckRouter);


const PORT = 3000;
const ADDRESS = "localhost"; // 127.0.0.1

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on http://${ADDRESS}:${PORT}`);
});

module.exports = app;