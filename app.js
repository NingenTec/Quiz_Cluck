const express = require("express");
//Requiring express package
const logger = require("morgan");
//Requiring morgan package
const path = require("path");
const cookieParser = require('cookie-parser')
//Defining cookie parser for use
const app = express();

//Routes
const cluckRouter = require("./routes/cluck")
const indexCluckRouter = require("./routes/index");

//Views setup
app.set("view", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(function(_req, _res, _next){
    console.log("cookies", request.cookies);
    const username = req.cookies.username;
    res.locals.loggedInUser = username || "";
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