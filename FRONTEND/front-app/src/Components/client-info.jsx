import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import axios from "axios";
import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';
import PropTypes from 'prop-types'

export const ClientInfo = ({ clientId }) => {
    const [clientInfo, setClientInfo] = useState({});

    useEffect(() => {
        axios
        .get(`http://localhost:3005/api/clients/${clientId}`)
        .then((res) => {
            setClientInfo(res.data)
        })
    },[ clientId ])

    const {name, email, phone} = clientInfo

    return (
        <Box component="div" className="client-info-div">
            <Typography variant="h4">Client Information</Typography>
            <Box component="div">
                <ul>
                    <li className="client-info-li"><FaIdBadge /> {name}</li>
                    <li className="client-info-li"><FaEnvelope /> {email}</li>
                    <li className="client-info-li"><FaPhone /> {phone}</li>
                </ul>
            </Box>
        </Box>
    )
};

ClientInfo.propTypes = {
    clientId: PropTypes.string
}
