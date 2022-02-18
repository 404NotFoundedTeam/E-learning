import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkboxes from "../checkbox/checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder({ names, placeholder }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: 300,
          mt: 3,
          border: "none",
          outline: "none",
          backgroundColor: "rgba(145, 158, 171, 0.08)",
          "&:hover": {
            backgroundColor: "rgba(145, 158, 171, 0.18)",
          },
        }}
      >
        <Select
          sx={{ border: "none", outline: "none" }}
          multiple
          displayEmpty
          value={personName}
          placeholder={placeholder}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p>{placeholder}</p>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value=""></MenuItem>
          {names.map((name, i) => (
            <div className="flex ">
              <Checkboxes id={`duration${i}`} />
              <label for={`duration${i}`}>
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              </label>
            </div>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
