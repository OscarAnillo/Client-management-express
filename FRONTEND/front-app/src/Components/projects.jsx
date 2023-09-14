import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Card, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

export const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [updateUI, setUpdateUI] = useState(false);

    useEffect(() => {
        axios
        .get("http://localhost:3005/api/projects")
        .then((res) => {
            setProjectsData(res.data)
            setUpdateUI((prevState) => !prevState)
        }) 
        .catch( console.log )
    },[updateUI]);

    return (
        <div className='projects-div'>
            {
                projectsData.map((project) => (
                    <Card key={project._id} raised className='card-map'>
                        <Box component="div" className='project-row'>
                            <Typography variant='h4'>{project.name}</Typography>
                            <Button><Link to={`projects/${project._id}`}>View</Link></Button>
                        </Box>
                        <Typography>Status: {project.status}</Typography>
                    </Card>
                ))
            }
        </div>
    )
}