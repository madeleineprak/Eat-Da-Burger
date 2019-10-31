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
    addOne: function(burger, cb) {
        var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
        burger.devoured = burger.devoured || 0;
        connection.query(queryString, [table, burger], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
    // updateOne: function(burger) {
    //     var queryString = "UPDATE ?? SET devoured=? WHERE id=?";
    //     connection.query(queryString, [table, 1, burger.id], function(err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //     })
    // }
}
module.exports = orm;