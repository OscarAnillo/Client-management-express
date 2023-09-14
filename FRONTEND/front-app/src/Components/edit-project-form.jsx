import { useEffect, useState } from 'react';
import { Button, FormControl, MenuItem, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { updateProject } from '../Services/project-services';
import PropTypes from 'prop-types'

export const EditProjectForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`http://localhost:3005/api/projects/${id}`)
        .then((res) => {
            setName(res.data.name);
            setDescription(res.data.description)
            setStatus(res.data.status)
        })
    }, [id])

    const submitHandler = e => {
        e.preventDefault();
        updateProject(id, { name, description, status });
        alert("Project was updated");
        navigate("/")
    }


    return (
        <Box component="div" className='update-client-div'>
            <Typography variant='h4' marginBottom={2}>Update Project Details</Typography>
            <Box component="form" onSubmit={submitHandler}>
                <FormControl fullWidth>
                    <TextField variant="outlined" value={name} label="Project Name" margin="normal" onChange={(e)=> setName(e.target.value)} />
                    <TextField variant="outlined" value={description} label="Project Description" margin="normal" onChange={(e)=> setDescription(e.target.value)} />
                    <TextField select label="Project Status" margin="normal" value={status} onChange={(e) => setStatus(e.target.value)} >
                        <MenuItem value="Not Started">Not Started</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                    </TextField>
                    <Button type='submit' variant='contained' className='submit-btn'>Submit Changes</Button>   
                </FormControl>
            </Box>
        </Box>
    )
}
EditProjectForm.propTypes = {
    project: PropTypes.object
}