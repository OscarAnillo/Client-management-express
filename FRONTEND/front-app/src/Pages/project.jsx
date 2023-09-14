import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ClientInfo } from "../Components/client-info";
import { EditProjectForm } from "../Components/edit-project-form";
import { DeleteProjectButton } from "../Components/delete-project-button";

export const Project = () => {
    const [project, setProject] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios
        .get(`http://localhost:3005/api/projects/${id}`)
        .then((res) => setProject(res.data))
    },[ id ])
    
    return (
        <Card raised>
            <CardContent>
             <div className="project-card-container">
                <div className="project-card-row">
                    <Typography variant="h3">{project.name}</Typography>
                    <Link to="/">Back</Link>
                </div>
                    <Typography variant="body1" marginBottom={2}>{project.description}</Typography>
                    <Typography variant="h5">Project Status</Typography>
                    <Typography variant="body1">{project.status}</Typography>
                    <ClientInfo clientId={project.clientId} />
                    <EditProjectForm project={project} />
                    <DeleteProjectButton projectId={project._id} />
                </div>
            </CardContent>
        </Card>
    )
}