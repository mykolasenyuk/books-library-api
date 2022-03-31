const express = require('express')
const { validation } = require('../../middlewares')
const { joiSchema } = require('../../models/books/books')
const { books: ctrl } = require('../../controllers')

const router = express.Router()
const booksValidation = validation(joiSchema)

router.get('/', ctrl.getAllBooks)
router.post('/', booksValidation, ctrl.addBook)
router.delete('/:bookId', ctrl.dltBook)
router.put('/:bookId', booksValidation, ctrl.updBook)
router.get('/:bookId', ctrl.getBookById)

module.exports = router
