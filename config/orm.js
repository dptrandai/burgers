//require connection
const connection = require("../config/connection.js");

function objSql(ob) {
    const arr = [];
    for (const key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + '=' + ob[key]);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function (table, cb) {
        const queryString = "INSERT INTO" + table + " (burger_name) VALUE ('" + burger_name + "')";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, burger_name, cb) {
        const queryString = "INSERT INTO" + table + " (burger_name) VALUE ('" + burger_name + "')";
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        const queryString = "UPDATE" + table;

        queryString += "SET";
        queryString += objSql(objColVals);
        queryString += "WHERE";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};
module.exports = orm;
