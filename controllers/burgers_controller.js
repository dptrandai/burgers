//require express and burger.js
const express = require("express"); 
const router = express.Router();
const burger_js = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
    burger.all(function(data) {
        const hbsObject = {burgers: data};
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create("burger_name", req.body.burger_name, function() {
        res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition");
    burger.update({devoured: req.body.devoured}, condition, function() {
        res.redirect("/burger");
    });
});