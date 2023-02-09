import express from "express"
const AuthorController = require('../controllers/AuthorController')
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/validateFields')

const author_controllers = express.Router()

author_controllers.get('/', AuthorController.getAuthors)
author_controllers.get('/:id', AuthorController.getAuthorById)




export default author_controllers