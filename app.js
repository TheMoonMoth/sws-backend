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

app.get("/new", (request, response) => {
  response.json("new stuff will go here")
})

module.exports = app
