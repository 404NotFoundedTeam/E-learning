import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SimpleContainer({ children, className }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={className}>
        {children}
      </Container>
    </React.Fragment>
  );
}
