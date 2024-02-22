const db = require('../db')
const Player= require('../models/player')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const players = [
        {
            name: 'Shai Gilgeous-Alexander',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png',
            team: '65d687d68e5633734493db1b',
            ppg: 31.1,
            rbpg: 5.5,
            apg:6.5,
            spg:2.2,
            fgPercentage: '54.6%',
            threePercentage: '37.1%',
            ftPercentage:'88.3%'
        },
        {
            name: 'Jalen Williams',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631114.png',
            team: '65d687d68e5633734493db1b',
            ppg: 19.2,
            rbpg: 4.1,
            apg:4.6,
            spg:1.0,
            fgPercentage: '54.6%',
            threePercentage: '45.3%',
            ftPercentage:'81.1%'
        },
        {
            name: 'Chet Holmgren',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631096.png',
            team: '65d687d68e5633734493db1b',
            ppg: 16.7,
            rbpg: 7.6,
            apg:2.7,
            spg:.7,
            fgPercentage: '53.5%',
            threePercentage: '39.3%',
            ftPercentage:'77.3%'
        },
        {
            name: 'Josh Giddey',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630581.png',
            team: '65d687d68e5633734493db1b',
            ppg: 11.5,
            rbpg: 6.1,
            apg:4.5,
            spg:.7,
            fgPercentage: '44.7%',
            threePercentage: '32.5%',
            ftPercentage:'83.1%'
        },
        {
            name: 'Luguentz Dort',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629652.png',
            team: '65d687d68e5633734493db1b',
            ppg: 10.6,
            rbpg:  3.8,
            apg: 1.4,
            spg: .8,
            fgPercentage: '43.9%',
            threePercentage: '39%',
            ftPercentage:'81.4%'
        },
        {
            name: 'Luka Doncic',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png',
            team: '65d687d68e5633734493db1c',
            ppg: 34.2,
            rbpg:  8.8,
            apg: 9.5,
            spg: 1.4,
            fgPercentage: '49.2%',
            threePercentage: '37.5%',
            ftPercentage:'77.7%'
        },
        {
            name: 'Kyrie Irving',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png',
            team: '65d687d68e5633734493db1c',
            ppg: 25.5,
            rbpg:  5.2,
            apg: 5.5,
            spg: 1.3,
            fgPercentage: '49.1%',
            threePercentage: '41.4%',
            ftPercentage:'87.8%'
        },
        {
            name: 'Tim Hardaway Jr.',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203501.png',
            team: '65d687d68e5633734493db1c',
            ppg: 17.3,
            rbpg:  3.6,
            apg: 1.7,
            spg: .5,
            fgPercentage: '41.4%',
            threePercentage: '36.5%',
            ftPercentage:'87.7%'
        },
        {
            name: 'Dante Exum',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203957.png',
            team: '65d687d68e5633734493db1c',
            ppg: 9.2,
            rbpg:  2.8,
            apg: 2.8,
            spg: .6,
            fgPercentage: '57.1%',
            threePercentage: '47.7%',
            ftPercentage:'72.7%'
        },
        {
            name: 'Dereck Lively',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1641726.png',
            team: '65d687d68e5633734493db1c',
            ppg: 9.2,
            rbpg:  7.8,
            apg: 1.3,
            spg: .6,
            fgPercentage: '73.6%',
            threePercentage: '0%',
            ftPercentage:'55.9%'
        },
        {
            name: 'Victor Wembanyama',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1641705.png',
            team: '65d687d68e5633734493db1d',
            ppg: 20.5,
            rbpg:  10.0,
            apg: 3.2,
            spg: 1.1,
            fgPercentage: '46.8%',
            threePercentage: '32%',
            ftPercentage:'81.1%'
        },
        {
            name: 'Devin Vassell',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630170.png',
            team: '65d687d68e5633734493db1d',
            ppg: 18.9,
            rbpg:  3.7,
            apg: 3.7,
            spg: 1.1,
            fgPercentage: '46.5%',
            threePercentage: '36.9%',
            ftPercentage:'80.6%'
        },
        {
            name: 'Keldon Johnson',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629640.png',
            team: '65d687d68e5633734493db1d',
            ppg: 16.1,
            rbpg:  5.7,
            apg: 3.0,
            spg: .9,
            fgPercentage: '44.8%',
            threePercentage: '33%',
            ftPercentage:'78%'
        },
        {
            name: 'Zach Collins',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628380.png',
            team: '65d687d68e5633734493db1d',
            ppg: 11.5,
            rbpg:  5.5,
            apg: 3.1,
            spg: .5,
            fgPercentage: '47.5%',
            threePercentage: '26.7%',
            ftPercentage:'78.2%'
        },
        {
            name: 'Jeremy Sochan',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631110.png',
            team: '65d687d68e5633734493db1d',
            ppg: 11.4,
            rbpg:  6,
            apg: 3.5,
            spg: .8,
            fgPercentage: '44.2%',
            threePercentage: '33.5%',
            ftPercentage:'77.4%'
        },
        {
            name: 'Jalen Brunson',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628973.png',
            team: '65d687d68e5633734493db1e',
            ppg: 27.6,
            rbpg:  3.8,
            apg: 6.5,
            spg: .9,
            fgPercentage: '48.3%',
            threePercentage: '41.1%',
            ftPercentage:'83.5%'
        },
        {
            name: 'Julius Randle',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203944.png',
            team: '65d687d68e5633734493db1e',
            ppg: 24,
            rbpg:  9.2,
            apg: 5,
            spg: .5,
            fgPercentage: '47.2%',
            threePercentage: '31.1%',
            ftPercentage:'78.1%'
        },
        {
            name: 'OG Anunoby',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628384.png',
            team: '65d687d68e5633734493db1e',
            ppg: 15.3,
            rbpg:  4.2,
            apg: 2.3,
            spg: 1.3,
            fgPercentage: '49.8%',
            threePercentage: '37.9%',
            ftPercentage:'77.4%'
        },
        {
            name: 'Josh Hart',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628404.png',
            team: '65d687d68e5633734493db1e',
            ppg: 7.8,
            rbpg:  7.1,
            apg: 3.2,
            spg: .8,
            fgPercentage: '42.3%',
            threePercentage: '30.6%',
            ftPercentage:'83.9%'
        },
        {
            name: 'Mitchell Robinson',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629011.png',
            team: '65d687d68e5633734493db1e',
            ppg: 6.2,
            rbpg:  10.3,
            apg: .7,
            spg: 1.5,
            fgPercentage: '59.2%',
            threePercentage: '0%',
            ftPercentage:'36.8%'
        },
        {
            name: 'Paolo Banchero',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631094.png',
            team: '65d687d68e5633734493db1f',
            ppg: 23,
            rbpg:  6.9,
            apg: 5.3,
            spg: 1.1,
            fgPercentage: '46.2%',
            threePercentage: '36.5%',
            ftPercentage:'70.2%'
        },
        {
            name: 'Franz Wagner',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630532.png',
            team: '65d687d68e5633734493db1f',
            ppg: 21.1,
            rbpg:  5.6,
            apg: 4.1,
            spg: 1.1,
            fgPercentage: '47.7%',
            threePercentage: '31.8%',
            ftPercentage:'85.8%'
        },
        {
            name: 'Jalen Suggs',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630591.png',
            team: '65d687d68e5633734493db1f',
            ppg: 12.3,
            rbpg:  3.3,
            apg: 2.4,
            spg: 1.4,
            fgPercentage: '44.5%',
            threePercentage: '38.4%',
            ftPercentage:'76%'
        },
        {
            name: 'Cole Anthony',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630175.png',
            team: '65d687d68e5633734493db1f',
            ppg: 11.9,
            rbpg:  4,
            apg: 4,
            spg: .8,
            fgPercentage: '43.2%',
            threePercentage: '32.6%',
            ftPercentage:'83.9%'
        },
        {
            name: 'Moritz Wagner',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629021.png',
            team: '65d687d68e5633734493db1f',
            ppg: 11.1,
            rbpg:  4.4,
            apg: 1.2,
            spg: .5,
            fgPercentage: '58.8%',
            threePercentage: '32.5%',
            ftPercentage:'79.5%'
        },
        {
            name: 'Jayson Tatum',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png',
            team: '65d687d68e5633734493db20',
            ppg: 27.1,
            rbpg:  8.6,
            apg: 4.8,
            spg: 1,
            fgPercentage: '47.5%',
            threePercentage: '36.3%',
            ftPercentage:'82.4%'
        },
        {
            name: 'Jaylen Brown',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627759.png',
            team: '65d687d68e5633734493db20',
            ppg: 22,
            rbpg:  5.5,
            apg: 3.7,
            spg: 1.1,
            fgPercentage: '49.2%',
            threePercentage: '34.2%',
            ftPercentage:'71.8%'
        },
        {
            name: 'Kristaps Porzingis',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/204001.png',
            team: '65d687d68e5633734493db20',
            ppg: 20.2,
            rbpg:  6.9,
            apg: 1.9,
            spg: .6,
            fgPercentage: '53.1%',
            threePercentage: '36.8%',
            ftPercentage:'84.5%'
        },
        {
            name: 'Derrick White',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628401.png',
            team: '65d687d68e5633734493db20',
            ppg: 15.6,
            rbpg:  3.9,
            apg: 4.7,
            spg: 1,
            fgPercentage: '46.2%',
            threePercentage: '39.7%',
            ftPercentage:'89.1%'
        },
        {
            name: 'Jrue Holiday',
            playerImg: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201950.png',
            team: '65d687d68e5633734493db20',
            ppg: 13.1,
            rbpg:  5.9,
            apg: 4.8,
            spg: .8,
            fgPercentage: '47.3%',
            threePercentage: '44%',
            ftPercentage:'83.3%'
        },
    ]

    await Player.insertMany(players)
    console.log("Created some Players!")
}
const run = async () => {
    await main()
    db.close()
}

run()
