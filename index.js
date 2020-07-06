const express = require("express");
//Requiring express package
const logger = require("morgan");
//Requiring morgan package

const path = require("path");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use((_req, _res, _next) => {
    console.log("cookies", request.cookies);
    const username = request.cookies.username;
    response.locals.loggedInUsername = username || "";
    next();
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 4; 
// Four days in milliseconds
app.get("/", function(_req, _res){
  //Setting a cookie
  response.cookie("myCookie", "cookie value here", {
    maxAge: COOKIE_MAX_AGE,
  });
  response.render("signUp");
//   Requires sign in page ejs
});

app.get("/clucks", function(_req, _res){
    //Requires clucks ejs
    // console.log("URL query: ", request.query);
    response.render("clucks");
  });

 app.post("/sign_in", function(_req, _res){
    const params = request.body;
    response.cookie("username", params.username, { maxAge: COOKIE_MAX_AGE });
    response.redirect("/");
});

app.post("/sign_out", function(_req, _res){
    // We use 'response.clearCookie(<cookie-name>)' to remove the specific cookie
    // with that cookie-name
    // In this case, we are removing the 'username' cookie from the browser
    response.clearCookie("username");
    response.redirect("/");
  });

const PORT = 3000;
const ADDRESS = "localhost"; // 127.0.0.1

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listening on http://${ADDRESS}:${PORT}`);
});