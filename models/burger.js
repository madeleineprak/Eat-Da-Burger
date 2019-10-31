var orm = require("../config/orm.js");

// module.exports = function(app) {
//     app.get
// }
var burger = {
    displayAll: function() {
        orm.selectAll(function(results) {
            res.json(results);
        });
    },
    addBurger: function() {
        orm.insertOne(function(results) {
            res.json(results);
        });
    },
    editBurger: function() {
        orm.updateOne(function(results) {
            res.json(results);
        });
    }
}

module.exports = burger;