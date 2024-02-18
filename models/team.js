const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Team = new Schema(
    {
        name: { type: String, required: true },
        logoImgUrl: { type: String, required: true },
        conference: { type: Schema.Types.ObjectId, ref: 'Conference' },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Team', Team)
