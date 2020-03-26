//require orm 
const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("burger", objColVals, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;