const Team = require('../models/team');


const getTeams= async (req,res)=>{
const teams= await Team.find().populate({
    path:'conference',
    select: 'name -_id'
})
res.json(teams)
}


const createTeam = async (req, res) => {
    try {
        const team = await new Team(req.body)
        await team.save()
        return res.status(201).json({
            team,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getTeams,
    createTeam
}
