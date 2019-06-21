import React from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

const useStylesDoctorView = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    // minWidth: 400,
  }
}));

function createData(firstName, lastName, pps) {
  return { firstName, lastName, pps };
}

const rows = [
  createData("Victor", "Martin", "12345678AB"),
  createData("Other", "Guy", "87654321XZ")
];

function DoctorView({ history }) {
  const classes = useStylesDoctorView();
  return (
    <div className={classes.container}>
      <h3>Hi Dr. Nicholas Riviera</h3>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Patient</TableCell>
            <TableCell>PPS Number</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.firstName}>
              <TableCell component="th" scope="row">
                {row.firstName} {row.lastName}
              </TableCell>
              <TableCell>{row.pps}</TableCell>
              <TableCell align="right">
                <Button onClick={() => history.push("/doctor/patient")}>
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DoctorView;
