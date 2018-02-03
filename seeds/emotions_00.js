exports.seed = function(knex, Promise) {
  return knex("emotions")
    .del()
    .then(() => {
      return knex("emotions").insert([
        {
          id: 0,
          emotion: "LOATHING",
          score: -6,
          description: "We were somewhere around Barstow on the edge of the desert when the drugs began to take hold. I remember saying something like ``I feel a bit lightheaded; maybe you should drive…`` And suddenly there was a terrible roar all around us and the sky was full of what looked like huge bats, all swooping and screeching and diving around the car, which was going about a hundred miles an hour with the top down to Las Vegas."
        },
        {
          id: 1,
          emotion: "Anguish",
          score: -5,
          description: "``Where animals are guided solely by instinct,`` said Kierkegaard, ``human beings enjoy a freedom of choice that we find both appealing and terrifying.``"
        },
        {
          id: 2,
          emotion: "Insecurity",
          score: -4,
          description: "Some people, whether from childhood trauma or innate characteristics, are unnerved by disharmony of any kind. They cannot abide by dissents or conflicts, and avoid them whenever possible. They develop heightened accommodation tendencies whenever they face dissonance."
        },
        {
          id: 3,
          emotion: "Apprehension",
          score: -3,
          description: "When we start raising different inconsistent truths, life may tip into bewilderment and the brain may go haywire. The confrontation between what is, not is, and maybe is, might embed an enduring showdown, harboring an intense apprehension, and bring us sometimes unwittingly to our knees."
        },
        {
          id: 4,
          emotion: "Pessimism",
          score: -2,
          description: "Complete happiness cannot possibly exist; for that the body is full of many sensations, and that the mind sympathizes with the body, and is troubled when that is troubled, and also that fortune prevents many things which we cherished in anticipation; so that for all these reasons, perfect happiness eludes our grasp."
        },
        {
          id: 5,
          emotion: "Disappointment",
          score: -1,
          description: "Paris Syndrome is a transient mental disorder exhibited by some individuals when visiting or going on vacation to Paris, as a result of extreme shock derived from their discovery that Paris is dirtier than they had expected it to be."
        },
        {
          id: 6,
          emotion: "Apathy",
          score: 0,
          description: "The opposite of love is not hate, it's indifference. The opposite of beauty is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, but indifference between life and death."
        },
        {
          id: 7,
          emotion: "Contentment",
          score: 1,
          description: "Contentment, and indeed usefulness, comes as the infallible result of great acceptances, great humilities of not trying to make ourselves this or that, but of surrendering ourselves to the fullness of life of letting life flow through us."
        },
        {
          id: 8,
          emotion: "Hopefulness",
          score: 2,
          description: "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth."
        },
        {
          id: 9,
          emotion: "Optimism",
          score: 3,
          description: "A fairy tale does not deny the existence of dyscatastrophe, of sorrow and failure: the possibility of these is necessary to the joy of deliverance. It denies (in the face of much evidence, if you will) universal final defeat…giving a fleeting glimpse of Joy; Joy beyond the walls of the world, poignant as grief."
        },
        {
          id: 10,
          emotion: "Passion",
          score: 4,
          description: "Finding your passion isn’t just about careers and money. it’s about finding your authentic self. The one you’ve buried beneath other people’s needs."
        },
        {
          id: 11,
          emotion: "Love",
          score: 5,
          description: "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life."
        },
        {
          id: 12,
          emotion: "Obession",
          score: 6,
          description: "All that most maddens and torments; all that stirs up the lees of things; all truth with malice in it; all that cracks the sinews and cakes the brain; all the subtle demonisms of life and thought; all evil, to crazy Ahab, were visibly personified, and made practically assailable in Moby Dick."
        }
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE emotions_id_seq RESTART WITH 13;")
    })
}
