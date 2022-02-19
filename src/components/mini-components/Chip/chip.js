import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function DeletableChips({ arr }) {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <div>
      {arr.map((item, i) => (
        <span>
          <Stack direction="row" spacing={1} sx={{}}>
            <Chip label={item} variant="outlined" onDelete={handleDelete} />
          </Stack>
        </span>
      ))}
    </div>
  );
}
