const db = require('../db')
const Conference= require('../models/conference')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const conferences = [
    ]

    await Conference.insertMany(conferences)
    console.log("Created some Conferences!")
}
const run = async () => {
    await main()
    db.close()
}

run()
