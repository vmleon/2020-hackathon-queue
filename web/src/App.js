import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import './App.css';

const useStylesLoginPatient = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 200,
  },
}))

const useStylesPatientView = makeStyles({
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

function LoginPatient() {
  const classes = useStylesLoginPatient();
  return <>
    <h2>Login Patient</h2>
    <form
      className={classes.container}
      noValidate
      autoComplete="off">
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
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary">
        Log in
    </Button>
    </form>
  </>;
}

function LoginStaff() {
  return <h2>Login Staff</h2>;
}

function NurseView() {
  return <h2>Nurse View</h2>;
}

function DoctorView() {
  return <h2>Doctor View</h2>;
}

function PatientView() {
  const classes = useStylesPatientView();
  return <>
    <h2>Your position</h2>
    <Avatar className={classes.avatar}>H</Avatar>
    <Avatar className={classes.orangeAvatar}>N</Avatar>
    <Avatar className={classes.purpleAvatar}>OP</Avatar>
  </>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/patient/">Patient</Link>
            </li>
            <li>
              <Link to="/staff/">Staff Login</Link>
            </li>
            <li>
              <Link to="/nurse/">Nurse</Link>
            </li>
            <li>
              <Link to="/doctor/">Doctor</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={LoginPatient} />
        <Route path="/patient/" component={PatientView} />
        <Route path="/staff/" component={LoginStaff} />
        <Route path="/nurse/" component={NurseView} />
        <Route path="/doctor/" component={DoctorView} />
      </div>
    </Router>
  );
}

export default App;
