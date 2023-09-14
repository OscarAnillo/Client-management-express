import { Box, Button } from "@mui/material"
import { FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { deleteProject } from "../Services/project-services"
import { useNavigate } from "react-router-dom"

export const DeleteProjectButton = ({ projectId }) => {
    const navigate = useNavigate()

    const clickDeleteHandler = (id) => {
        deleteProject(id);
        navigate("/")
    }
    return (
        <Box>
            <Button startIcon={<FaTrash />} variant="outlined" color="error" onClick={() => clickDeleteHandler(projectId)}>Delete Project</Button>
        </Box>
    )
}

DeleteProjectButton.propTypes = {
    projectId: PropTypes.string
}