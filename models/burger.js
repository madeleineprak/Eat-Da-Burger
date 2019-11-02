var orm = require("../config/orm.js");

var burger = {
    displayAll: function(cb) {
        orm.selectAll(function(results) {
            cb(results);
        });
    },
    addBurger: function(burgerName, cb) {
        orm.addOne(burgerName, function(results) {
            cb(results);
        });
    },
    editBurger: function(burgerId, cb) {
        orm.updateOne(burgerId, function(results) {
            cb(results);
        });
    },
    deleteBurger: function(burgerId, cb) {
        orm.deleteOne(burgerId, function(results) {
            cb(results);
        });
    }
}

module.exports = burger;