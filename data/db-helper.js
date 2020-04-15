const knex = require("knex");
const knexfile = require("../knexfile");

const db = knex(knexfile.development);

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("cars");
}

function findById(id) {
  db("users").where({ id }).first();
}

function add(car) {
  db("users").insert(car);
}

function update(changes, id) {
  db("users").where({ id }).update(changes);
}

function remove(id) {
  db("users").where({ id }).del();
}
