import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

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

export default function Table() {
  //   const classes = useStyles();

  const styles = {
    // width: 1800,
    align: "right",
    marginLeft: 50,
    marginRight: 50,
  };

  return (
    <table style={styles}>
      <tr>
        <th>HOSPITAL NAME</th>
        <th>BEDS AVAILABLE</th>
        <th>VENTILATORS AVAILABLE</th>
        <th>PRICE</th>
        <th>ADDRESS</th>
        <th>CONTACT AT</th>
      </tr>
      <tr>
        <td>Fortis</td>
        <td>159</td>
        <td>6</td>
        <td>5000</td>
        <td>Bagalore-560053</td>
        <td>9089786756</td>
      </tr>
      <tr>
        <td>Fortis</td>
        <td>159</td>
        <td>6</td>
        <td>5000</td>
        <td>Bagalore-560053</td>
        <td>9089786756</td>
      </tr>
      <tr>
        <td>Fortis</td>
        <td>159</td>
        <td>6</td>
        <td>5000</td>
        <td>Bagalore-560053</td>
        <td>9089786756</td>
      </tr>
      <tr>
        <td>Fortis</td>
        <td>159</td>
        <td>6</td>
        <td>5000</td>
        <td>Bagalore-560053</td>
        <td>9089786756</td>
      </tr>
      <tr>
        <td>Fortis</td>
        <td>159</td>
        <td>6</td>
        <td>5000</td>
        <td>Bagalore-560053</td>
        <td>9089786756</td>
      </tr>
    </table>
  );
}
