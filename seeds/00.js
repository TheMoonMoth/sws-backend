exports.seed = function(knex, Promise) {
  return knex("stories")
    .del()
    .then(() => {
      return knex("stories").insert([
        {
          id: 1,
          story: "For sale: baby shoes, never worn.",
          author_id: "1",
          rating: 0
        },
        {
          id: 2,
          story: "Starlet sex scandal. Giant squid involved.",
          author_id: "2",
          rating: 0
        },
        {
          id: 3,
          story: "Wasted day. Wasted life. Dessert, please.",
          author_id: "3",
          rating: 0
        },
        {
          id: 4,
          story: "It cost too much, staying human.",
          author_id: "4",
          rating: 0
        },
        {
          id: 5,
          story: "Streets full of water. Please advise.",
          author_id: "5",
          rating: 0
        },
        {
          id: 6,
          story: "I win lottery. Sun goes nova.",
          author_id: "3",
          rating: 0
        },
        {
          id: 7,
          story: "Found true love. Married someone else.",
          author_id: "6",
          rating: 0
        },
        {
          id: 8,
          story: "We're older now, and older still.",
          author_id: "7",
          rating: 0
        },
        {
          id: 9,
          story: "Eat. Shit. Fuck. Laugh. Cry. Die.",
          author_id: 8,
          rating: 0
        }
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE stories_id_seq RESTART WITH 10;")
    })
}
