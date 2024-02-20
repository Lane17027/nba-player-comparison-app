const Player = require('../models/player');

const getPlayers= async (req,res)=>{
    const players= await Player.find().populate({
        path: 'team',
        select: 'name -_id'
    })
    res.json(players)
    }


const createPlayer = async (req, res) => {
    try {
        const player = await new Player(req.body)
        await player.save()
        return res.status(201).json({
            Player,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getPlayers,
    createPlayer,
}
