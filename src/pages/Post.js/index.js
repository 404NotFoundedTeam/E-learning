import { Button } from "@mui/material";
import React, { useState } from "react";
import MainVideo from "../../components/Video";

function MainPost() {
  const [playVid, setPlayVid] = useState(false);
  return (
    <>
      <MainVideo play={playVid} setPlay={setPlayVid} />
      <Button variant={"contained"} onClick={() => setPlayVid(true)}>Change</Button>
    </>
  );
}

export default MainPost;
