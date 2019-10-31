var orm = require("../config/orm.js");

// module.exports = function(app) {
//     app.get
// }
var burger = {
    displayAll: function(cb) {
        orm.selectAll(function(results) {
            cb(results);
        });
    },
    addBurger: function(burger, cb) {
        orm.insertOne(burger, function(results) {
            cb(results);
        });
    }
    // editBurger: function(res) {
    //     orm.updateOne(function(results) {
    //         res.json(results);
    //     });
    // }
}

module.exports = burger;