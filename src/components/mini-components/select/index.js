import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
        sx={{ m: 1, width: 300, mt: 3, marginLeft: 0, border: "none" }}
      >
        <Select
          multiple
          displayEmpty
          value={personName}
          sx={{
            outline: "none",
            border: "none",
            borderRadius: "8px",
            "&:focus": {
              border: "none",
            },
            backgroundColor: "rgba(145, 158, 171, 0.08)",
            "&:hover": {
              backgroundColor: "rgba(145, 158, 171, 0.18)",
            },
          }}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <span className="text-sm text-slate-500 font-medium">
                  {placeholder}
                </span>
              );
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{
                backgroundColor: "rgba(145, 158, 171, 0.08)",
                "&:select": {
                  backgroundColor: "rgba(145, 158, 171, 0.18)",
                },
              }}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
