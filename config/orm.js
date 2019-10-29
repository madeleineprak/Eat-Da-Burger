// MySQL Connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(table, col, vals) {
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES"
    },
    updateOne: function() {

    }
}