import axios from "axios";
const baseURL = "http://localhost:3005/api/projects"

export const getAllProjects = async () => {
    const res = await axios.get(baseURL);
    return res.data
}

export const createProject = async (project) => {
    const res = await axios.post(baseURL, project);
    return res.data
}

export const updateProject = async (id, project) => {
    console.log(project);
    const res = axios.patch(`${baseURL}/${id}`, project)
    return res.data;
}

export const deleteProject = (id) => {
    const res = axios.delete(`${baseURL}/${id}`);
    return res.data
}