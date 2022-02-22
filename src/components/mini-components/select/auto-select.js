import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const outerTheme = createTheme({
  palette: {
    secondary: {
      main: orange[400],
    },
  },
  shape: {
    borderRadius: 4,
  },

  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: "small",
      },
    },
  },
});

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;
const checkedIcon = (
  <CheckBoxIcon
    fontSize="small"
    color="#123"
    sx={{ borderRadius: "5px", backgroundColor: "transparent !important" }}
  />
);

export default function CheckboxesTags({ data }) {
  return (
    <ThemeProvider theme={outerTheme}>
      <Autocomplete
        id="checkboxes-tags-demo"
        sx={{
          borderRadius: "10px",
          backgroundColor: "rgba(145, 158, 171, 0.08)",
          "&:hover": {
            backgroundColor: "rgba(145, 158, 171, 0.18)",
          },
          "& fieldset": { border: "none" },
          "& label": { display: "none" },
        }}
        options={data}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li
            {...props}
            sx={{ boxShadow: 1, "& .MuiOutlinedInput-root": { boxShadow: 2 } }}
          >
            <Checkbox
              color="secondary"
              icon={icon}
              checkedIcon={checkedIcon}
              checked={selected}
              sx={{
                borderRadius: "5px",
                "& MuiAutocomplete-popupIndicator": {
                  "& svg": { borderRadius: "10px !important" },
                },
              }}
            />
            {option}
          </li>
        )}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Checkboxes" placeholder="Favorites" />
        )}
      />
    </ThemeProvider>
  );
}
