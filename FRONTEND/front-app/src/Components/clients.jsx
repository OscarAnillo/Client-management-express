import { useEffect, useState } from "react"
import { ClientsRow } from "./clients-row";
import { styled } from '@mui/material/styles';
import {TableContainer, Paper, Table, TableBody, TableHead, TableRow, TableCell, tableCellClasses } from '@mui/material'
import axios from "axios";
import { deleteClient } from "../Services/services";


export const Clients = () => {
    const [clientsData, setClientsData] = useState([]);
    const [updateUI, setUpdateUI] = useState(false)

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
    const deleteHandler = (id) => {
      confirm("Do you wanna delete this client?")
      deleteClient(id)
    }
    
    useEffect(() => {
      axios
        .get("http://localhost:3005/api/clients")
        .then((res) => {
          setClientsData(res.data)
          setUpdateUI((prevState) => !prevState)
        })
    },[updateUI])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
                        <StyledTableCell>Phone</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                    </StyledTableRow>
                    </TableHead>
                    <TableBody>
                    {clientsData.map((client) => (
                        <ClientsRow key={client._id} client={client} deleteHandler={deleteHandler}/>
                    ))}
                    </TableBody>
                </Table>
    </TableContainer>
        </div>
    )
}