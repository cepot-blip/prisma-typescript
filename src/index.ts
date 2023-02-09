const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const author_controllers = require('./controllers/AuthorController')
dotenv.config()


const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/author', author_controllers)

app.listen(PORT, () => {
	console.log(`
  
  ==================================

   L I S T E N  T O  P O R T ${PORT} :v

  ==================================
  
  `)
})