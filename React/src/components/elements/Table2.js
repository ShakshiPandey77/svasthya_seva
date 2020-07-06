import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "NAME", minWidth: 170 },
  { id: "beds", label: "BEDS AVAILABLE", minWidth: 170 },
  {
    id: "ventilators",
    label: "VENTILATORS AVAILABLE",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString("en-Us")
  },
  {
    id: "price",
    label: "PRICE",
    minWidth: 170,
    align: "center",
    format: value => value.toLocaleString("en-US")
  },
  {
    id: "address",
    label: "ADDRESS",
    minWidth: 200,
    align: "center",
    format: value => value.toFixed(2)
  },
  {
    id: "contact",
    label: "CONTACT",
    minWidth: 100,
    align: "center",
    format: value => value.toFixed(2)
  }
];

function createData(name, beds, ventilators, price, address, contact) {
  return { name, beds, ventilators, price, address, contact };
}

const rows = [
  createData(
    "Columbia Asia  Hospital",
    75,
    0,
    5000,
    "Survey No. 42/2, Ward No-150, Ambalipura, Sarjapura Road,Bengaluru-560102",

    " 9741638518"
  ),
  createData(
    "Columbia Asia Hospital- White Field A Unit of Columbia Asia Hospital Pvt Ltd",
    26,
    2,
    37000,
    "Sy No.10p And 12P, Ramagondanahalli (V), Near Varthur Kodi, Varthur Hobli, Bangalore-560066",
    "9827075015"
  ),

  createData(
    "Agadi Hospital & Research Centre, Wilson Garden.",
    22,
    0,
    "Unknown",
    "35, Siddaiah Rd,Vinayaka Nagar, Shamana Garden, Wilson Garden, Bengaluru, Karnataka 560027",
    "9845184436"
  ),
  createData(
    "Aster R V Hospital",
    20,
    0,
    "Unknown",
    "No.CA-37, 24th Main, 1st phase, J.P Nagar, Bangalore-560078",
    "9538897501"
  ),
  createData(
    "Aveksha Hospital",
    20,
    0,
    "Unknown",
    "No.122, Varadarajaswamy Layout, Singapura, M S Palya, Vidyaranyapura post, Bangalore-560097.",
    " "
  ),
  createData(
    "Bangalore Baptist Hospital",
    20,
    0,
    "Unknown",
    "Bellary Road, Hebbal, Bangalore-560024",
    "9740787540"
  ),
  createData(
    "BGS Global Institute of Medical Sciences And Hospital",

    200,
    0,
    "Unknown",
    "#67, BGS Health And Education City, Uttarahalli Road, Kengeri, Bangalore-560060.",

    "9008305323"
  ),
  createData(
    "CHINMAYA MISSION HOSPITAL",
    84,
    0,
    "Unknown",
    "1, 1, Chinmaya Mission Hospital Rd, Opp. Krishna Temple, Defence Colony, Indiranagar, Bengaluru, Karnataka 560038",
    " 9448943678"
  ),
  createData(
    "Chiraayu Hospital",
    20,
    0,
    "Unknown",
    "No 1 Pemmegowda road, J.C . NagarBangalore-560006.",
    "9741007544"
  ),
  createData(
    "Chris Super Speciality Hospital And Reseach Centre Pvt. Ltd.",
    30,
    0,
    "Unknown",
    "No. 1, Grace Town, Hennur Ring Road, Kalyan Nagar, Bengaluru-560043",

    "9945015827"
  ),
  createData(
    "Vydehi Institute of Medical Sciences & Research Centre",
    0,
    0,
    0,
    "#82, EPIP Area, Nallurahalli Whitefield, Bangalore-560066",
    "09663367258"
  ),
  createData(
    "Aaxis Hospital",
    0,
    0,
    0,
    "BBMP SL No 786, Property No 29/1 And 30, Belathur Village, Bidarahalli Hobli, Kadugodi Bengaluru - 560067",
    "9442170872"
  )
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 700,
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6)
  }
}));

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
