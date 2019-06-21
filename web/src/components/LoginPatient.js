import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStylesLoginPatient = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 200
  }
}));

function LoginPatient({ history }) {
  const classes = useStylesLoginPatient();
  return (
    <div className={classes.container}>
      <h2>Login Patient</h2>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="pps"
          label="PPS Number"
          autoFocus
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/patient/")}
        >
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPatient;
