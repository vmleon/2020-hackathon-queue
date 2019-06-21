import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const SymptomsInput = ({ value, onChange }) => {
  const symptoms = [
    "Runny or stuffy nose",
    "Sore throat",
    "Cough",
    "Congestion",
    "Headache",
    "Sneezing",
    "Fever"
  ];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

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

  function getStyles(name, symptomName) {
    return {
      fontWeight: symptomName.indexOf(name) === -1 ? 1 : 5
    };
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="select-multiple-checkbox">Symptoms</InputLabel>
      <Select
        multiple
        value={value}
        onChange={onChange}
        input={<Input id="select-multiple" />}
        MenuProps={MenuProps}
      >
        {symptoms.map(name => (
          <MenuItem key={name} value={name} style={getStyles(name, value)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SymptomsInput;
