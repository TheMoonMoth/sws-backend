exports.up = function(knex, Promise) {
  return knex.schema.createTable("emotions", function(table) {
    table.increments()
    table.text("emotion")
    table.integer("score")
    table.text("description")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("emotions")
}
