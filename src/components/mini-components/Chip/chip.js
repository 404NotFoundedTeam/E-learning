import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function DeletableChips({ item }) {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="row" spacing={1} sx={{}}>
      <Chip label={item} variant="outlined" onDelete={handleDelete} />
    </Stack>
  );
}
