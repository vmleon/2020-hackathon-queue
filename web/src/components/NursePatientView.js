import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SymptomsInput from "./SymptomInput";
import PriorityInput from "./PriorityInput";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "80%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function NursePatientView({ history }) {
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
      <h2>New patient</h2>
      <div className={classes.details}>
        <TextField
          id="firstName"
          label="First name"
          autoFocus
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          id="lastName"
          label="Last name"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          id="pps"
          label="PPS Number"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          id="dob"
          label="Date of Birdth"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        <SymptomsInput onChange={handleChangeSymptoms} value={symptomNames} />
        <PriorityInput onChange={handleChangePriority} value={priority} />
        <TextField
          id="description"
          label="Description"
          multiline
          rowsMax="5"
          // value={values.multiline}
          // onChange={handleChange("multiline")}
          className={classes.textField}
          margin="normal"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/nurse/")}
      >
        Register
      </Button>
    </div>
  );
}

export default NursePatientView;
