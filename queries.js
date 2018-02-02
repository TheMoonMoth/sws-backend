const database = require("./dbknextion.js")

module.exports = {
  listStories() {
    return database("stories").select()
  },
  listAuthors() {
    return database("authors").select()
  },
  listEmotions() {
    return database("emotions").select()
  },
  read(id) {
    return database("stories")
      .select()
      .where("author_id", id)
  },
  newStory(story) {
    return database("stories")
      .insert(story)
      .returning("*")
      .then(record => record[0])
  },
  newAuthor(author) {
    return database("authors")
      .insert(author)
      .returning("*")
      .then(record => record[0])
  },
  voteYes(id) {
    return database("stories")
      .whereIn('id', id)
      .update({
        'rating': database.raw('rating + 1')
      })
      .returning("*")
      .then(record => record[0])
  },
  voteNo(id) {
    return database("stories")
      .whereIn('id', id)
      .update({
        'rating': database.raw('rating - 1')
      })
      .returning("*")
      .then(record => record[0])
  },
  delete(id) {
    return database("stories")
      .delete()
      .where("id", id)
  }
}
