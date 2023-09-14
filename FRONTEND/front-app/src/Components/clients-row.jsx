import { styled } from '@mui/material/styles';
import { TableRow, TableCell, tableCellClasses, Button } from '@mui/material'
import { FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types'

export const ClientsRow = ({ client, deleteHandler }) => {
  
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
    
    return (
        <StyledTableRow>    
            <StyledTableCell>{client.name}</StyledTableCell>
            <StyledTableCell>{client.email}</StyledTableCell>
            <StyledTableCell>{client.phone}</StyledTableCell>
            <StyledTableCell>
                <Button variant="contained" onClick={() => deleteHandler(client._id)} startIcon={<FaTrash />}>
                Delete
                </Button>
            </StyledTableCell>
        </StyledTableRow> 
        
    )
}

ClientsRow.propTypes = {
    client: PropTypes.object,
    deleteHandler: PropTypes.func
}