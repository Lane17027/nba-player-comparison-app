const db = require("../db");
const Team = require("../models/team");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const teams = [
    { name: "Oklahoma City Thunder", logoImgUrl: "https://content.sportslogos.net/logos/6/2687/full/khmovcnezy06c3nm05ccn0oj2.png", conference: '65d6876abfd8718bc3d3b176' },
    { name: "Dallas Mavericks", logoImgUrl: "https://content.sportslogos.net/logos/6/228/full/3463_dallas_mavericks-primary-2018.png", conference: '65d6876abfd8718bc3d3b176' },
    { name: "San Antonio Spurs", logoImgUrl: "https://content.sportslogos.net/logos/6/233/full/2547_san_antonio_spurs-primary-2018.png", conference: '65d6876abfd8718bc3d3b176' },
    { name: "New York Knicks", logoImgUrl: "https://content.sportslogos.net/logos/6/216/full/new_york_knicks_logo_primary_2024_sportslogosnet-7170.png", conference: '65d6876abfd8718bc3d3b175' },
    { name: "Orlando Magic", logoImgUrl: "https://content.sportslogos.net/logos/6/217/full/orlando_magic_logo_primary_20117178.png", conference: '65d6876abfd8718bc3d3b175' },
    { name: "Boston Celtics", logoImgUrl: "https://content.sportslogos.net/logos/6/213/full/boston_celtics_logo_primary_19977628.png", conference: '65d6876abfd8718bc3d3b175' },

];

  await Team.insertMany(teams);
  console.log("Created some teams!");
};
const run = async () => {
  await main();
  db.close();
};

run();
