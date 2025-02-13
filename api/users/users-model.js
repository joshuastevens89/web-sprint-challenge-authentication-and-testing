const db = require("../../data/dbConfig")

module.exports = {
  add,
  find,
  findBy,
  findById,
}

function find() {
  return db("users")
}

function findBy(filter) {
  return db("users")
    .select("users.id", "users.username", "users.password")
    .where(filter)
}

async function add(user) {
  const [id] = await db("users").insert(user)
  return findById(id)
}

function findById(id) {
  return db("users")
    .select("users.id", "users.username", "users.password")
    .where("users.id", id)
    .first()
}
