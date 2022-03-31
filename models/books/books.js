const { Schema, model } = require('mongoose')
const Joi = require('joi')

const bookSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      default: '',
    },
    shortDescription: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
      required: true,
    },
    publishedDate: {
      date: {
        type: String,
        required: true,
      },
    },
    status: {
      type: String,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    authors: [
      {
        type: String,
      },
    ],
  },
  { versionKey: false, timestamps: true },
)

const joiSchema = Joi.object({
  title: Joi.string(),
  thumbnailUrl: Joi.string(),
  shortDescription: Joi.string(),
  longDescription: Joi.string(),
  publishedDate: Joi.object({
    date: Joi.string(),
  }),
  status: Joi.string(),
  pageCount: Joi.number(),
  authors: Joi.array().items(Joi.string()),
})

const Book = model('book', bookSchema)

module.exports = {
  Book,
  joiSchema,
}
