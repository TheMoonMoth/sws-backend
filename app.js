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

app.post("/stories", (request, response) => {
  queries
    .newStory(request.body)
    .then(story => {
      response.status(201).json({ message: "You did it!" })
    })
    .catch(console.error)
})

app.post("/authors", (request, response) => {
  queries
    .newAuthor(request.body)
    .then(author => {
      response.status(201).json({message: "New author added!"})
    })
})

app.get("/stories/:id", (request, response) => {
  queries
    .read(request.params.id)
    .then(stories => {
      response.status(201).json({ stories })
    })
    .catch(console.error)
})

app.use((request, response) => {
  response.status(404)
})

module.exports = app
