import express from 'express';
import Clients from '../Model/clients.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const clients = await Clients.find({})
        res.status(200).json(clients);
    } catch (err) {
        res.send(err)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const foundClient = await Clients.findById(req.params.id);
        res.status(200).json(foundClient);
    } catch(err) {
        res.status(404).json(`User with id ${req.params.id} was not found`);
    }
})

router.post("/", async (req, res) => {
    const body = req.body;
    const newClient = new Clients({
        name: body.name,
        email: body.email,
        phone: body.phone
    }); 

    try {
        await newClient.save();
        res.status(200).json(newClient)
    } catch(err) {
        res.json(err)
    }
})

router.delete("/:id", async (req, res) => {
   try {
    const findUser = await Clients.findByIdAndRemove(req.params.id);
    res.status(201).json(findUser)
   } catch(err) {
    res.status(404).json("Cannot locate user")
   }
})


export default router;
