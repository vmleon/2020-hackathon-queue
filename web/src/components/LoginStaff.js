import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStylesLoginStaff = makeStyles(theme => ({
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

function LoginStaff({ history }) {
  const classes = useStylesLoginStaff();
  return (
    <div className={classes.container}>
      <h2>Login Staff</h2>
      <form noValidate className={classes.container} autoComplete="off">
        <TextField
          id="username"
          label="Username"
          autoFocus
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          className={classes.textField}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/nurse/")}
        >
          Log in
        </Button>
      </form>
      <Link className={classes.link} to="/">
        Are you a patient?
      </Link>
    </div>
  );
}

export default LoginStaff;
