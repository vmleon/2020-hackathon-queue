import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPatient from "./LoginPatient";
import LoginStaff from "./LoginStaff";
import NurseView from "./NurseView";
import DoctorView from "./DoctorView";
import PatientView from "./PatientView";
import DoctorPatientView from "./DoctorPatientView";
import "./App.css";

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
