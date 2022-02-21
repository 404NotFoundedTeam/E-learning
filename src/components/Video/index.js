import { Button, IconButton } from "@mui/material";
import React from "react";

function MainVideo({ play, setPlay }) {
  return (
    <div className={"w-full fixsed top-0 left-0 h-screen z-50 bg-slate-500 " + (play ? "" : " hidden")}>
      <IconButton
        variant={"contained"}
        color="error"
        onClick={() => setPlay(false)}
      >
        X
      </IconButton>
      hello world
    </div>
  );
}

export default MainVideo;
