var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.displayAll(function(data) {
        var burgersObject = {
            burgers: data
        };
        console.log("hbs object");
        console.log(burgersObject);
        res.render("index", burgersObject);
    });
    
    // burger.displayAll(res)
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body.name);
    burger.addBurger([
        req.body.name
    ], function(result) {
        console.log(req.body.name);
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.editBurger([
        req.params.id
    ], function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    burger.deleteBurger([
        req.params.id
    ], function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

module.exports = router;