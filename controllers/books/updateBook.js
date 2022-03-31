const { Book } = require('../../models')

const updBook = async (req, res, next) => {
  try {
    const { bookId } = req.params
    const book = { bookId }

    const result = await Book.findByIdAndUpdate(book.bookId, req.body, {
      new: true,
    })
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: `Book with ID=${bookId} not found`,
      })
      return
    }
    res.json({
      status: 'success',
      code: 200,
      message: '✔️ Book updated',
      data: { result },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updBook
