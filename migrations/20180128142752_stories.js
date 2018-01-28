exports.up = function(knex, Promise) {
  return knex.schema.createTable("stories", function(table) {
    table.increments()
    table.text("story")
    table.integer("author_id")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("stories")
}
