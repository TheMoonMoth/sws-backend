const database = require("./dbknextion.js");

module.exports = {
    listStories(){
      return database("stories")
        .select()
    },
    listAuthors(){
      return database("authors")
        .select()
    },
    read(id){
      return database("stories")
        .select()
        .where("id", id)
        .first()
    },
    newStory(story){
      return database("stories")
        .insert(story)
        .returning("*")
        .then(record => record[0])
    },
    update(id, story){
      return database("stories")
        .update(story)
        .where("id", id)
        .returning("*")
        .then(record => record[0])
    },
    delete(id){
      return database("stories")
        .delete()
        .where("id", id)
    }
}
