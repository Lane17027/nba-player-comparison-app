// const mongoose = require('mongoose')

// mongoose
//     .connect('mongodb://127.0.0.1:27017/nbaDatabase')
//     .then(() => {
//         console.log('Successfully connected to MongoDB.')
//     })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })



// const db = mongoose.connection

// module.exports = db










const mongoose = require('mongoose')

let uri=`mongodb+srv://Lane17027:Lane17027@nbadatabase.z6tvkh3.mongodb.net/?appName=mongosh+2.1.3`;

mongoose
    .connect(uri)
    .then(() => {
        console.log(`Successfully connected to ${uri}`)
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })



const db = mongoose.connection

module.exports = db

//api key       eJM3BYfxR5skEe0U5L4LhSAPRxLWbN6ppjr44i027wlvRXesw1ncGTyGeUvA3Nag


//url https://us-west-2.aws.data.mongodb-api.com/app/data-cyglg/players/data/v1


//  headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Request-Headers': '*',
//     'api-key': 'eJM3BYfxR5skEe0U5L4LhSAPRxLWbN6ppjr44i027wlvRXesw1ncGTyGeUvA3Nag',
//   }
