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
import { httpRequests } from "../../util/http";
import { useState, useEffect } from "react";

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

interface Category {
  id: string;
  name: string;
  createdAt: Date;
}

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    httpRequests.get('/private/v1/category').then(
      response => setData(response.data)
    );
  }, [])
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell>Data de criação</StyledTableCell>
            <StyledTableCell align="right">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: Category) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{String(row.createdAt)}</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;