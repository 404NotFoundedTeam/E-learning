import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "8px",
  marginLeft: "0 !important",
  backgroundColor: "rgba(145, 158, 171, 0.08)",
  "&:hover": {
    backgroundColor: "rgba(145, 158, 171, 0.18)",
  },
  color: "#637381",
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  marginLeft: 0,
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "5px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
}));

export default function SearchMui({ ...props }) {
  return (
    <Search {...props}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
