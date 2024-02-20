const Conference = require('../models/conference');

const getConferences= async (req, res)=>{
    const conferences= await Conference.find()
    res.json(conferences)
}

const getConference=async (req,res)=>{
    const {id}= req.params
    const conferences=await Conference.find()
    if (conferences[id]){
        res.json(conferences[id])
    }
    else return res.status(404).send('Conference with the specified ID does not exists');

}

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


const updateConference = async (req, res) => {
    try {
        let { id } = req.params;
        let conference = await Conference.findByIdAndUpdate(id, req.body, { new: true })
        if (conference) {
            return res.status(200).json(conference)
        }
        throw new Error("Conference not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteConference = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Conference.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Conference deleted");
        }
        throw new Error("Conference not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getConferences,
    getConference,
    createConference,
    updateConference,
    deleteConference
}
