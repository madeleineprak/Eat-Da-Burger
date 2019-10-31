// MySQL Connection
var connection = require("../config/connection.js");
var table = "burgers";

var orm = {
    selectAll: function(callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(burger, callback) {
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES (?)";
        connection.query(queryString, [burger.burger_name], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(burger, callback) {
        var queryString = "UPDATE " + table + " SET devoured=? WHERE id=?";
        connection.query(queryString, [0, burger.id], function(err, result) {
            if (err) throw err;
            callback(result);
        })
    }
}
module.exports = orm;