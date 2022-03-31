const { Book } = require('../../models')
const { Conflict } = require('http-errors')

const addBook = async (req, res, next) => {
  try {
    const { title } = req.body

    const category = await Book.findOne({ title })
    if (category) {
      throw new Conflict(`Book already exist`)
    }

    const newBook = { ...req.body }
    const result = await Book.create(newBook)
    res.status(201).json({
      status: 'sucess',
      code: 201,
      message: `✔️ Book '${req.body.title}' added`,
      data: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}
module.exports = addBook
