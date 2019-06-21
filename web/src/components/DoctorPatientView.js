import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { deepOrange } from "@material-ui/core/colors";
import SymptomsInput from "./SymptomInput";
import PriorityInput from "./PriorityInput";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "80%"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  positionAvatar: {
    margin: 10,
    width: 200,
    height: 200,
    color: "#fff",
    backgroundColor: deepOrange[500]
  },
  text: {
    padding: theme.spacing(3, 2)
  },
  done: {
    margin: theme.spacing(3, 2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function Details() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.details}>
        <p>PPS number: 12345678AB</p>
        <p>DoB: 1980/03/02</p>
        <p>Email: test@example.com</p>
        <p>Phone: 123456789</p>
        <p>Address: Dublin 13</p>
      </div>
    </>
  );
}

function DoctorPatientView({ history }) {
  const classes = useStyles();
  const [symptomNames, setSymptomNames] = React.useState([]);
  const [priority, setPriority] = React.useState("");

  function handleChangeSymptoms(event) {
    setSymptomNames(event.target.value);
  }

  function handleChangePriority(event) {
    setPriority(event.target.value);
  }

  return (
    <div className={classes.container}>
      <h2>John Doyle</h2>
      <div className={classes.form}>
        <Details />
        <SymptomsInput onChange={handleChangeSymptoms} value={symptomNames} />
        <PriorityInput onChange={handleChangePriority} value={priority} />
        <TextField
          id="description"
          label="Description"
          multiline
          autoFocus
          rowsMax="5"
          // value={values.multiline}
          // onChange={handleChange('multiline')}
          className={classes.textField}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.done}
          onClick={() => history.push("/doctor/")}
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default DoctorPatientView;
