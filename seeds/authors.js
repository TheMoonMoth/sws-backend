exports.seed = function(knex, Promise) {
  return knex("authors")
    .del()
    .then(() => {
      return knex("authors").insert([
        {
          id: 1,
          name: "Ernest Hemingway"
        },
        {
          id: 2,
          name: "Margaret Atwood"
        },
        {
          id: 3,
          name: "Steven Meretzky"
        },
        {
          id: 4,
          name: "Bruce Sterling"
        },
        {
          id: 5,
          name: "Robert Benchley"
        },
        {
          id: 6,
          name: "Dave Eggers"
        },
        {
          id: 7,
          name: "Anonymous"
        },
        {
          id: 8,
          name: "Peter Nichols"
        },{
          id: 9,
          name: "Danny Snelson"
        }
      ])
    })
}
