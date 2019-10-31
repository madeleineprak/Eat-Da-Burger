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
    addBurger: function(burgerName, cb) {
        orm.insertOne(burgerName, function(results) {
            cb(results);
        });
    },
    editBurger: function(burgerId, cb) {
        orm.updateOne(burgerId, function(results) {
            cb(results);
        });
    }
}

module.exports = burger;