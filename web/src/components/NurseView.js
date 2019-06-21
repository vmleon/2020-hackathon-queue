import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStylesNurseView = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 200
  },
  fab: {
    margin: theme.spacing(1)
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 250
  },
  input: {
    marginLeft: 4,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

function NurseView({ history }) {
  const classes = useStylesNurseView();
  return (
    <div className={classes.container}>
      <h2>Hi Doris Freedman</h2>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search by PPS number"
          autoFocus
          inputProps={{ "aria-label": "Search by PPS number" }}
        />
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <p>Search to see results</p>
      <hr />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => history.push("/nurse/patient")}
      >
        <AddIcon /> Register a new patient
      </Button>
    </div>
  );
}

export default NurseView;
