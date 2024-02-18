const db = require('../db')
const Player= require('../models/player')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const players = [
    ]

    await Player.insertMany(players)
    console.log("Created some Players!")
}
const run = async () => {
    await main()
    db.close()
}

run()
