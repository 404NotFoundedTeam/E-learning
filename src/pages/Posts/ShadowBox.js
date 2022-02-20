import React, { useState } from "react";
import styled from "styled-components";
import MainButton from "../../components/Button";

export default function ShadowBox({ src, title, text, btn }) {
  return (
    <div className="rounded-lg p-4 h-[500px] lg:h-[350px] relative overflow-hidden">
      <img
        src={src}
        className={"w-full object-cover h-full absolute top-0 left-0"}
      />
      <Shadow className="shadow w-full p-3 h-full z-10  absolute top-0 left-0 flex text-center items-center flex-col justify-end">
          <h3 className="font-bold text-2xl mb-4 text-cyan-500">{title}</h3>
          <p className="text-sm !text-white mb-5 w-3/4 mx-auto">{text}</p>
          
          <MainButton variant="contained" className={"mb-5"} onClick={btn.click}>{btn.text}</MainButton>
      </Shadow>
    </div>
  );
}

const Shadow = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(255, 255, 255, 0.3) 100%
  );
`;
