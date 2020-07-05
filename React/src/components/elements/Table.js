import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 200,
    marginLeft: 50,
  },
});

function createData(name, beds, ventilators, price, address, contact) {
  return { name, beds, ventilators, price, address, contact };
}

const rows = [
  createData("Fortis", 159, 6.0, 5000, "Bangalore-560014", "09663367258"),
  createData("Apollo", 237, 9.0, 37000, "Bangalore-560017", "9089786756"),
  createData("Fortis", 159, 6.0, 5000, "Bangalore-560014", "09663367258"),
  createData("Apollo", 237, 9.0, 37000, "Bangalore-560017", "9089786756"),
  createData("Fortis", 159, 6.0, 5000, "Bangalore-560014", "09663367258"),
  createData("Apollo", 237, 9.0, 37000, "Bangalore-560017", "9089786756"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">HOSPITAL NAME</TableCell>
            <TableCell align="centre">BEDS AVAILABLE</TableCell>
            <TableCell align="centre">VENTILATORS AVAILABLE</TableCell>
            <TableCell align="centre">PRICE</TableCell>
            <TableCell align="centre">ADDRESS</TableCell>

            <TableCell align="centre">CONTACT AT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.name}</TableCell>

              <TableCell align="centre">{row.beds}</TableCell>
              <TableCell align="centre">{row.ventilators}</TableCell>
              <TableCell align="centre">{row.price}</TableCell>
              <TableCell align="centre">{row.address}</TableCell>
              <TableCell align="centre">{row.contact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
