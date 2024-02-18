const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Player = new Schema(
    {
        name: { type: String, required: true },
        playerImg: {type: String, required: true},
        team: { type: Schema.Types.ObjectId, ref: 'Team'  },
        ppg: { type: Number, required: true },
        rbpg: { type: Number, required: true },
        apg: { type: Number, required: true },
        spg: { type: Number, required: true },
        fgPercentage: { type: String, required: true },
        threePercentage: { type: String, required: true },
        ftPercentage: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Player', Player)
