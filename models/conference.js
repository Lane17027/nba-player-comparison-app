const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Conference = new Schema(
    {
        name: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Conference', Conference)
