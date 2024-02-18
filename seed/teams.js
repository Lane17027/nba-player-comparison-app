const db = require('../db')
const Team= require('../models/team')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const teams = [
    ]

    await Team.insertMany(teams)
    console.log("Created some teams!")
}
const run = async () => {
    await main()
    db.close()
}

run()
