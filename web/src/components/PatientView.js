import React from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { orange, red, purple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const positionMap = {
  1: { end: "st", color: red[500] },
  2: { end: "nd", color: orange[500] },
  3: { end: "rd", color: purple[500] }
};

const posColor = pos => (positionMap[pos] && positionMap[pos].color) || null;
const posEnd = pos => (positionMap[pos] && positionMap[pos].end) || "th";

const useStylesPatientView = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  positionAvatar: ({ position }) => {
    return {
      backgroundColor: posColor(position),
      margin: 10,
      width: 200,
      height: 200,
      color: "#fff"
    };
  },
  text: {
    padding: theme.spacing(3, 2)
  }
}));

const patientPriority = {
  queuePosition: 3,
  estimatedTime: 90
};

function PatientView({ history }) {
  const pos = patientPriority.queuePosition;
  const estimatedTimeInMinutes = patientPriority.estimatedTime;
  const firstName = "John";
  const classes = useStylesPatientView({
    position: pos
  });
  return (
    <div className={classes.container}>
      <h2>{firstName}, your position is</h2>
      <Avatar className={classes.positionAvatar} sizes="huge">
        <Typography variant="h3" component="h1">
          {`${pos}${posEnd(pos)}`}
        </Typography>
      </Avatar>
      <p className={classes.text}>
        Estimated time:{" "}
        {moment.duration(estimatedTimeInMinutes, "minutes").humanize()}
      </p>
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
