import * as React from "react";
import Rating from "@mui/material/Rating";

export default function RatingMui({ ...props }) {
  const [value, setValue] = React.useState(2);

  return (
    <Rating
      {...props}
      name="simple-controlled"
      value={value}
      sx={{ fontSize: "24px" }}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
