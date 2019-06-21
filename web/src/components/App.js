import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LoginPatient from "./LoginPatient";
import LoginStaff from "./LoginStaff";
import NurseView from "./NurseView";
import DoctorView from "./DoctorView";
import PatientView from "./PatientView";
import DoctorPatientView from "./DoctorPatientView";
import NursePatientView from "./NursePatientView";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  titleText: {
    textDecoration: "none"
  }
}));

const MenuAppBar = ({ history }) => {
  const classes = useStyles();
  const path = history.location.pathname;
  const auth = !(path.includes("/staff") || path === "/");
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.titleText}>
            IHAQS
          </Link>
        </Typography>
        {auth && (
          <Button color="inherit" onClick={() => history.goBack()}>
            Back
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

function App() {
  return (
    <Router>
      <>
        <Route component={MenuAppBar} />
        <Route path="/" exact component={LoginPatient} />
        <Route path="/patient/" component={PatientView} />
        <Route path="/staff/" component={LoginStaff} />
        <Route path="/nurse/" component={NurseView} />
        <Route path="/doctor/" component={DoctorView} />
        <Route path="/doctorpatient/" component={DoctorPatientView} />
        <Route path="/nursepatient/" component={NursePatientView} />
      </>
    </Router>
  );
}

export default App;
