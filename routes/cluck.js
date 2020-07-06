const express = require("express");
const router = express.Router();
const queries = require("../DB/queries");

router.get("/", function(_req,_res){
    queries.getAll().then(function(cluck){
        res.render("index", {cluck});
    });
});

router.get("/new", function(req, res){
    res.render("new");
});

router.post("/", function(req, res){
    queries.add({
        username: req.cookies.username,
        content: req.body.content,
        imageUrl: req.body.imageUrl,

    })
    .then(function(cluck){
        res.redirect("/");
    });
});

module.exports = router