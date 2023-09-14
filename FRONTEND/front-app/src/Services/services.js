import axios from "axios";
const baseURLClients = "http://localhost:3005/api/clients";

export const getAllClients = async () => {
    const res = await axios.get(baseURLClients);
    return res.data;
}

export const getSingleClient = async (id) => {
    const res = await axios.get(`${baseURLClients}/${id}`);
    return res.data;
}

export const createClient = async (user) => {
    const res = await axios.post(baseURLClients, user);
    return res.data
}

export const deleteClient = (id) => {
    const res = axios.delete(`${baseURLClients}/${id}`);
    return res.data
}