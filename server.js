const express = require("express");
const db = require("./db");
const bodyParser = require("body-parser");
const logger = require("morgan");
// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(logger("dev"));

const conferenceController = require("./controllers/conferenceController");
const playerController = require("./controllers/playerController");
const teamController = require("./controllers/teamController");
// app.use() middleware here ^ ///////////////////

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

 let headers={
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': 'eJM3BYfxR5skEe0U5L4LhSAPRxLWbN6ppjr44i027wlvRXesw1ncGTyGeUvA3Nag',
  }

app.get("/conferences", conferenceController.getConferences);
app.get("/conferences/:id", conferenceController.getConference);
app.post("/conferences", conferenceController.createConference);
app.put("/conferences/:id", conferenceController.updateConference);
app.delete("/conferences/:id", conferenceController.deleteConference);



app.get("/teams", teamController.getTeams);
app.get("/teams/:id", teamController.getTeam);
app.post("/teams", teamController.createTeam);
app.put("/teams/:id", teamController.updateTeam);
app.delete("/teams/:id", teamController.deleteTeam);


app.get("/players", playerController.getPlayers);
app.get("/players/:id", playerController.getPlayer);
app.post("/players", playerController.createPlayer);
app.put("/players/:id", playerController.updatePlayer);
app.delete("/players/:id", playerController.deletePlayer);
