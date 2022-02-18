import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes({ ...props }) {
  return (
    <div>
      <Checkbox {...props} {...label} />
    </div>
  );
}
