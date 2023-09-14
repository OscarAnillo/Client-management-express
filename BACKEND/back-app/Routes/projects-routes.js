import express from 'express';
import Projects from '../Model/Projects.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const projects = await Projects.find({})
        res.status(200).json(projects);
    } catch (err) {
        res.status(404).json(err.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const foundProject = await Projects.findById(req.params.id);
        res.status(200).json(foundProject);
    } catch(err) {
        res.status(404).json(`Project with id ${req.params.id} was not found`);
    }
})

router.post("/", async (req, res) => {
    const body = req.body;
    
    const newProject = new Projects({
        name: body.name,
        description: body.description,
        status: body.status ,
        clientId: body.clientId
    }); 

    try {
        await newProject.save();
        res.status(200).json(newProject)
    } catch(err) {
        res.json(err)
    }
})

router.patch("/:id", async (req, res) => {
    const projectToUpdate = await Projects.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
        }
    });
    res.json(projectToUpdate)
    
})

router.delete("/:id", async (req, res) => {
   try {
    const findProject = await Projects.findByIdAndRemove(req.params.id);
    res.status(201).json(findProject)
   } catch(err) {
    res.status(404).json("Cannot locate user")
   }
})

export default router;
