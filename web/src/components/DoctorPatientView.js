import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { deepOrange } from "@material-ui/core/colors";

const useStylesDoctorPatientView = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  details: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%"
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "100%"
  }
}));

function DoctorPatientView({ history }) {
  const classes = useStylesDoctorPatientView();
  return (
    <div className={classes.container}>
      <h2>Victor Martin</h2>
      <div className={classes.details}>
        <p>PPS number: 12345678AB</p>
        <p>DoB: 1980/03/02</p>
        <p>Email: test@example.com</p>
        <p>Phone: 123456789</p>
        <p>Address: 12 Bartlington st</p>
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
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/doctor/")}
      >
        Done
      </Button>
    </div>
  );
}

export default DoctorPatientView;
