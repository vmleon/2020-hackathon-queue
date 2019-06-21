import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const PriorityInput = ({ value, onChange }) => {
  const priorities = [
    { id: 1, name: "Urgent" },
    { id: 2, name: "Hight" },
    { id: 3, name: "Medium" },
    { id: 4, name: "Low" }
  ];

  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="priority">Priority</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        inputProps={{
          name: "name",
          id: "priority"
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {priorities.map(p => (
          <MenuItem key={p.id} value={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PriorityInput;
