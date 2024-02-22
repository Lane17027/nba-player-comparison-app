const Player = require('../models/player');

const getPlayers= async (req,res)=>{
    const players= await Player.find().populate('team')
    console.log(players)
    res.json(players)
    }

    const getPlayer=async (req,res)=>{
        const {id}= req.params
        const players=await Player.find().populate({path:'team', select:'name -_id'})
        if (players[id]){
            res.json(players[id])
        }
        else return res.status(404).send('Player with the specified ID does not exists');

    }


const createPlayer = async (req, res) => {
    try {
        const player = await new Player(req.body)
        await player.save()
        return res.status(201).json({
            player,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updatePlayer = async (req, res) => {
    try {
        let { id } = req.params;
        let player = await Player.findByIdAndUpdate(id, req.body, { new: true })
        if (player) {
            return res.status(200).json(player)
        }
        throw new Error("Player not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Player.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Player deleted");
        }
        throw new Error("Player not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getPlayers,
    createPlayer,
    getPlayer,
    updatePlayer,
    deletePlayer
}
