exports.seed = function(knex, Promise) {
  return knex("stories")
    .del()
    .then(() => {
      return knex("stories").insert([
        {
          id: 1,
          story: "For sale: baby shoes, never worn.",
          author_id: "1"
        },
        {
          id: 2,
          story: "Starlet sex scandal. Giant squid involved.",
          author_id: "2"
        },{
          id: 3,
          story: "Wasted day. Wasted life. Dessert, please.",
          author_id: "3"
        },{
          id: 4,
          story: "It cost too much, staying human.",
          author_id: "4"
        },{
          id: 5,
          story: "Streets full of water. Please advise.",
          author_id: "5"
        }
      ])
    })
}
