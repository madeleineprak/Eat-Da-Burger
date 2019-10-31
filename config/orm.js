// MySQL Connection
var connection = require("../config/connection.js");
var table = "burgers";

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function(err, result) {
            if (err) throw err;
            console.log("display all ran");
            cb(result);
        });
    },
    addOne: function(burgerName, cb) {
        var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
        // burger.devoured = burger.devoured || 0;
        connection.query(queryString, [table, burgerName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(burgerId, cb) {
        var queryString = "UPDATE ?? SET devoured=? WHERE id=?";
        connection.query(queryString, [table, 1, burgerId], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    deleteOne: function(burgerId, cb) {
        var queryString = "DELETE FROM ?? WHERE id=?";
        connection.query(queryString, [table, burgerId], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}
module.exports = orm;