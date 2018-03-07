const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const queries = require("./queries")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/", (request, response) => {
  response.json("Welcome.")
})

app.get("/stories", (request, response) => {
  queries
    .listStories()
    .then(stories => {
      response.json({ stories })
    })
    .catch(console.error)
})

app.get("/authors", (request, response) => {
  queries
    .listAuthors()
    .then(authors => {
      response.json({ authors })
    })
    .catch(console.error)
})

app.get("/emotions", (request, response) => {
  queries
    .listEmotions()
    .then(emotions => {
      response.json({ emotions })
    })
    .catch(console.error)
})

app.post("/stories", (request, response) => {
  queries
    .newStory(request.body)
    .then(story => {
      response.status(201).json({ message: "You did it!" })
    })
    .catch(console.error)
})

app.put("/voteYes/:storyId", (request, response) => {
  console.log(request.params.storyId)
  console.log(request.body)

  queries
    .voteYes(request.params.storyId)
    .then(vote => {
      response.status(201).json({message: "Yes vote tallied!"})
    })
    .catch(console.error)
})

app.put("/voteNo/:storyId", (request, response) => {
  console.log(request.params.storyId)
  console.log(request.body)

  queries
    .voteNo(request.params.storyId)
    .then(vote => {
      response.status(201).json({message: "No vote tallied!"})
    })
    .catch(console.error)
})

app.post("/authors", (request, response) => {
  queries
    .newAuthor(request.body)
    .then(author => {
      response.status(201).json({message: "New author added!", post: author})
    })
})

app.delete("/delete/author/:id", (request, response)=>{
  queries
    .deleteAuthor(request.params.id)
    .then(author => response.status(201).json({message: "author deleted."}))
    .catch(console.error)
})

app.get("/stories/:id", (request, response) => {
  queries
    .read(request.params.id)
    .then(stories => {
      response.status(201).json({ stories })
    })
    .catch(console.error)
})

app.delete("/delete/:id", (request, response) => {
  queries
    .delete(request.params.id)
    .then(res => response.status(201).json({message: "This story was deleted."}))
})

app.use((request, response) => {
  response.status(404)
})

module.exports = app
