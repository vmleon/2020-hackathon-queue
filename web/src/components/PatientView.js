import React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

const Position = styled(Avatar)({
  backgroundColor: deepOrange[500],
  margin: 10,
  width: 200,
  height: 200,
  color: "#fff"
});

const useStylesPatientView = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    padding: theme.spacing(3, 2)
  }
}));

function PatientView({ history }) {
  const patientPriority = {
    queuePosition: 3,
    estimatedTime: 92
  };
  const classes = useStylesPatientView();
  return (
    <div className={classes.container}>
      <h2>Victor, your position is</h2>
      <Position sizes="huge">
        <Typography variant="h3" component="h1">
          3rd
        </Typography>
      </Position>
      <p className={classes.text}>Estimated time: 1h 32m</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/patient/")}
      >
        Refresh
      </Button>
    </div>
  );
}

export default PatientView;
