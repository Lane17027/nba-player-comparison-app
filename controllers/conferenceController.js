const Conference = require('../models/conference');

const createConference = async (req, res) => {
    try {
        const conference = await new Conference(req.body)
        await conference.save()
        return res.status(201).json({
            conference,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createConference,
}
