import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ ...props }) {
  return (
    <Stack spacing={2} {...props}>
      <Pagination count={10} color="secondary" />
    </Stack>
  );
}
