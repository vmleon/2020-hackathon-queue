import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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
    marginBottom: theme.spacing(1),
    width: "100%"
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const symptoms = [
  "Runny or stuffy nose",
  "Sore throat",
  "Cough",
  "Congestion",
  "Headache",
  "Sneezing",
  "Fever"
];

function getStyles(name, symptomName) {
  return {
    fontWeight: symptomName.indexOf(name) === -1 ? 1 : 5
  };
}

function NursePatientView({ history }) {
  const classes = useStyles();
  const [symptomName, setSymptomName] = React.useState([]);

  function handleChange(event) {
    setSymptomName(event.target.value);
  }

  return (
    <div className={classes.container}>
      <h2>Register a new patient</h2>
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
          defaultValue="1980-01-01"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">Symptoms</InputLabel>
          <Select
            multiple
            value={symptomName}
            onChange={handleChange}
            input={<Input id="select-multiple" />}
            MenuProps={MenuProps}
          >
            {symptoms.map(name => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, symptomName)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
