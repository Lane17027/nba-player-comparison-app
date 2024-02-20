const Team = require("../models/team");

const getTeams = async (req, res) => {
  const teams = await Team.find().populate({
    path: "conference",
    select: "name -_id",
  });
  res.json(teams);
};

const getTeam=async (req,res)=>{
    const {id}= req.params
    const teams=await Team.find().populate({
        path: "conference",
        select: "name -_id",
      })
    console.log(teams)
    if (teams[id]){
        res.json(teams[id])
    }
    else return res.status(404).send('Team with the specified ID does not exists');

}

const createTeam = async (req, res) => {
  try {
    const team = await new Team(req.body);
    await team.save();
    return res.status(201).json({
      team,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateTeam = async (req, res) => {
    try {
        let { id } = req.params;
        let team = await Team.findByIdAndUpdate(id, req.body, { new: true })
        if (team) {
            return res.status(200).json(team)
        }
        throw new Error("team not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Team.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("team deleted");
        }
        throw new Error("Team not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
  getTeams,
  createTeam,
  getTeam,
  updateTeam,
  deleteTeam
};
