const knex = require("./client");

module.exports = {
    getAll() {
        return knex("cluck").select("*").orderBy("createdAt", desc);
    },
    add(cluck){
        return knex("cluck").insert(cluck, "*");
    },

};