import { useEffect, useState } from "react";
import { FaList } from 'react-icons/fa'
import { Box, Button, MenuItem, Modal, TextField, Typography } from "@mui/material"
import { createProject } from "../Services/project-services";
import axios from "axios";

export const AddProjectModal = () => {
    const [open, setOpen] = useState(false);
    const [userInput, setUserInput] = useState({
        name:"",
        description:"",
        status:"",
        clientId:""
    })
    const [clientsData, setClientsData] = useState([]);

    const changeHandler = e => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    const {name, description, status, clientId} = userInput;
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if(!name || !description || !status){
            return alert("Please fill out the required fields")
        }
        createProject({ name, description, status, clientId  })
        setUserInput({
            name:"",
            description:"",
            status:"",
            clientId:""
        })
    }

    useEffect(() => {
        axios
        .get("http://localhost:3005/api/clients")
        .then((res) => {
            setClientsData(res.data)
        })
        .catch( console.log ) 
    },[])
    
    return (    
        <div>
            <Button variant="contained" color="secondary" onClick={handleOpen} startIcon={<FaList />}>Add Project</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="box-modal">
                    <Box component="div" className="modal-row">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add Project
                        </Typography>
                        <Button onClick={handleClose}>X</Button>
                    </Box>
                    <Box component="form" onSubmit={submitHandler}>
                        <TextField label="Name" fullWidth margin="normal" name="name" value={name} onChange={changeHandler} />
                        <TextField label="Description" fullWidth margin="normal" name="description" value={description} onChange={changeHandler} />
                        <TextField select label="Status" fullWidth margin="normal" name="status" value={status} onChange={changeHandler} 
                        >
                            <MenuItem value="Not Started">Not Started</MenuItem>
                            <MenuItem value="In Progress">In Progress</MenuItem>
                            <MenuItem value="Completed">Completed</MenuItem>
                        </TextField>
                        <TextField select fullWidth label="Clients" margin="normal" name="clientId" value={clientId} onChange={changeHandler}>
                            {
                                clientsData.map((client) => (
                                    <MenuItem key={client._id} value={client._id}>{client.name}</MenuItem>
                                ))
                            }
                        </TextField>
                        <Button variant="contained" size="large" type="submit">Submit</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}