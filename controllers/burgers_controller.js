var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();
var lunches = [
    {
      lunch: "Beet & Goat Cheese Salad with minestrone soup."
    }, {
      lunch: "Pizza, two double veggie burgers, fries with a Big Gulp"
    }
  ];

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

router.post("api/burgers", function(req, res) {
    burger.addBurger([
        req.body.burger_name
    ], function(result) {
        res.redirect("/");
    });
});

// router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);

//     burger.editBurger({
//         devoured: req.body.devoured
//     }, condition, function(result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

module.exports = router;