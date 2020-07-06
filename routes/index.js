const router = require("express").Router();
const queries = require("../DB/queries");
const ONE_DAY = new Date(Date.now() + 1000 * 60 * 60 * 24);

//Home route
router.get("/", function(req, res){
    queries
    .getAll(req.params.id,{
        username: req.cookies.username,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
    })
    .then(function(cluck){
        res.render("index", {cluck});
    });
});

//Sign in route
router.get("/sign_in", function(_req, res){
    res.render("sign_in");
});

//Post route
router.post("sign_in", function(req, res){
    const {username} = req.body;
    res.cookie("username", username, {expires: ONE_DAY});
    res.redirect("/");
});

//Sign out route
router.post("/sign_out", function(req, res){
    res.clearCookie("username");
    res.redirect("/");
});

module.exports = router;