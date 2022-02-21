import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ChipsArray from "../ChipArray/index";
import DeletableChips from "../Chip/chip";
import { Checkbox } from "@mui/material";
import CustomizedCheckbox from "../checkbox/checkbox";

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
            console.log(selected);
            // return <DeletableChips arr={[selected.join(", ")]} />;
            // return <ChipsArray arr={selected} />;
            return (
              <span className="text-slate-600 font-bold text-sm">
                {selected.join(", ")}
              </span>
            );
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {names.map((name, i) => (
            <MenuItem
              key={name}
              value={name}
              sx={{
                marginLeft: "10px",
                marginBottom: "5px",
                marginRight: "10px",
                borderRadius: "5px",
                backgroundColor: "rgba(145, 158, 171, 0.12) !important",
                "&:selected": {
                  backgroundColor: "rgba(145, 158, 171, 0.42) !important",
                },
              }}
              style={getStyles(name, personName, theme)}
            >
              <CustomizedCheckbox
                id={`select${i}`}
                sx={{ "&:selected": { color: "rgb(250, 84, 28)" } }}
              />
              {/* <input
                type="checkbox"
                style={{ selected: { color: "rgb(250, 84, 28)" } }}
                className="mr-4"
              /> */}
              <label id={`select${i}`}> {name}</label>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
