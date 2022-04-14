import * as React from "react";

import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableBody,
  tableCellClasses,
  TableCell,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#e41134",
    color: "#fbc004",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id: string, name: string, createdAt: string) {
  return { id, name, createdAt };
}

const rows = [
  createData("Frozen yoghurt", "Frozen yoghurt", String(new Date())),
  createData("Ice cream sandwich", "Frozen yoghurt", String(new Date())),
  createData("Frozen yoghurt", "Frozen yoghurt", String(new Date())),
  createData("Frozen yoghurt", "Frozen yoghurt", String(new Date())),
  createData("Frozen yoghurt", "Frozen yoghurt", String(new Date())),
];

const Table = () => {

  useEffect(() => {
    
  }, [])
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Nome</StyledTableCell>
            <StyledTableCell align="right">Data de criação</StyledTableCell>
            <StyledTableCell align="right">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
