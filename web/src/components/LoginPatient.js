import React from "react";
import { Link } from "react-router-dom";
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
  },
  link: {
    margin: theme.spacing(2),
    textDecoration: "none"
  }
}));

function LoginPatient({ history }) {
  const classes = useStylesLoginPatient();
  return (
    <div className={classes.container}>
      <h2>Login</h2>
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
      <Link className={classes.link} to="/staff">
        Are you a member of the staff?
      </Link>
    </div>
  );
}

export default LoginPatient;
