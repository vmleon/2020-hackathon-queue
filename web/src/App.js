import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import AddIcon from '@material-ui/icons/Add';
import { deepOrange } from '@material-ui/core/colors';
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

function LoginPatient() {
  const classes = useStylesLoginPatient();
  return <div className={classes.container}>
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
  </div>;
}

const useStylesLoginStaff = makeStyles(theme => ({
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

function LoginStaff() {
  const classes = useStylesLoginStaff();
  return <div className={classes.container}>
    <h2>Login Staff</h2>
    <form
      noValidate
      className={classes.container}
      autoComplete="off">
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
      <Button variant="contained" color="primary">
        Log in
      </Button>
    </form>
  </div>;
}

const useStylesNurseView = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: 200,
  },
  fab: {
    margin: theme.spacing(1),
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
  },
  input: {
    marginLeft: 4,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
})
);

function NurseView() {
  const classes = useStylesNurseView();
  return <div className={classes.container}>
    <h2>Hi Doris Freedman</h2>
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search by PPS number"
        autoFocus
        inputProps={{ 'aria-label': 'Search by PPS number' }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
    <p>
      Search to see results
    </p>
    <hr></hr>
    <Fab variant="extended" color="secondary" aria-label="Add" className={classes.fab}>
      <AddIcon /> Register a new patient
    </Fab>
  </div >;
}

const useStylesDoctorView = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    // minWidth: 400,
  },
})
);

function createData(firstName, lastName, pps) {
  return { firstName, lastName, pps };
}

const rows = [
  createData('Victor', 'Martin', '12345678AB'),
  createData('Other', 'Guy', '87654321XZ'),
];

function DoctorView() {
  const classes = useStylesDoctorView();
  return <div className={classes.container}>
    <h3>Hi Dr. Nicholas Riviera</h3>
    <Table className={classes.table} size="small">
      <TableHead>
        <TableRow>
          <TableCell>Patient</TableCell>
          <TableCell>PPS Number</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.firstName}>
            <TableCell component="th" scope="row">
              {row.firstName} {row.lastName}
            </TableCell>
            <TableCell>{row.pps}</TableCell>
            <TableCell align="right"><Button>View</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>;
}

const useStylesPatientView = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  positionAvatar: {

    margin: 10,
    width: 200,
    height: 200,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  text: {
    padding: theme.spacing(3, 2),
  }
})
);

function PatientView() {
  const classes = useStylesPatientView();
  return <div className={classes.container}>
    <h2>Victor, your position is</h2>
    <Avatar className={classes.positionAvatar} sizes="huge">
      <Typography variant="h3" component="h1">
        3rd
      </Typography>
    </Avatar>
    <p className={classes.text}>
      Estimated time: 1h 32m
    </p>
    <Button variant="contained" color="primary">
      Refresh
    </Button>
  </div>;
}
const useStylesDoctorPatientView = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  details: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
  },
  positionAvatar: {
    margin: 10,
    width: 200,
    height: 200,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  text: {
    padding: theme.spacing(3, 2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
  },
})
);

function DoctorPatientView() {
  const classes = useStylesDoctorPatientView();
  return <div className={classes.container}>
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
    <Button variant="contained" color="primary">
      Done
    </Button>
  </div>;
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
            <li>
              <Link to="/doctorpatient/">Doc patient view</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={LoginPatient} />
        <Route path="/patient/" component={PatientView} />
        <Route path="/staff/" component={LoginStaff} />
        <Route path="/nurse/" component={NurseView} />
        <Route path="/doctor/" component={DoctorView} />
        <Route path="/doctorpatient/" component={DoctorPatientView} />
      </div>
    </Router>
  );
}

export default App;
