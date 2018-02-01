exports.up = function(knex, Promise) {
  return knex.schema.createTable("stories", function(table) {
    table.increments()
    table.text("story")
    table.integer("author_id")
    table.integer("rating")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("stories")
}
