import { useState } from "react";
import { Button, Box, Typography, Modal, TextField } from "@mui/material"
import { FaUser } from 'react-icons/fa'
import { createClient } from "../Services/services";

export const AddClientModal = () => {
    const [open, setOpen] = useState(false);
    const [userInput, setUserInput] = useState({
        name:"",
        email:"",
        phone:""
    })

    const changeHandler = e => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }
    const {name, email, phone} = userInput;
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if(!name || !email || !phone) {
            return alert("Please provide all the required fields")
        }
        createClient({ name, email, phone });
        setUserInput({
            name:"",
            email:"",
            phone:""
        })


    }

    return (
        <div className="add-client-div">
            <Button onClick={handleOpen} variant="contained" startIcon={<FaUser />}>Add Client</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="box-modal">
                    <Box component="div" className="modal-row">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add Client
                        </Typography>
                        <Button onClick={handleClose} type="button">X</Button>
                    </Box>
                    <Box component="form" onSubmit={submitHandler}>
                        <TextField label="Name" fullWidth margin="normal" name="name" value={name} onChange={changeHandler} />
                        <TextField label="Email" fullWidth margin="normal" name="email" value={email} onChange={changeHandler} />
                        <TextField label="Phone" fullWidth margin="normal" name="phone" value={phone} onChange={changeHandler} />
                        <Button variant="contained" size="large" type="submit">Submit</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}