import * as React from "react";
import { Link } from 'react-router-dom';
import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableBody,
  tableCellClasses,
  TableCell,
  Paper,
  Tooltip
} from "@mui/material";
import { styled } from "@mui/material/styles";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState, useEffect } from "react";

import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import categoryHttp from "../../util/http/category-http";

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

interface Category {
  id: string;
  name: string;
  createdAt: Date;
}

interface TableProps {
}

const Table = (props: TableProps) => {
  const [data, setData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    categoryHttp.list().then(({data}) => setData(data))
  }, [refreshKey])

  function deleteRegister(id: string) {
    categoryHttp.delete(id).then((response) => console.log(response))
    setRefreshKey(oldKey => oldKey +1)
  }

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell>Criado em</StyledTableCell>
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
              <StyledTableCell>
                <span>{format(parseISO(String(row.createdAt)), 'dd/MM/yyyy')}</span>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Link
                  to={`/categories/edit/${row.id}`}
                >
                  <Tooltip title="Editar">
                    <EditIcon
                      style={{ color: 'fbc004'}}
                    />
                  </Tooltip>
                </Link>
                <Tooltip title="Excluir">
                  <DeleteIcon onClick={() => deleteRegister(row.id)} style={{ color: 'red', cursor: 'pointer' }}/>
                </Tooltip>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;