import React, { lazy } from "react";
import St from "./St";

export default function Owner({ data }) {
  return (
    <div className="flex">
      <img
        className="w-[50px] h-[50px] rounded-full"
        src={data.img}
        alt={data.name}
        loading="lazy"
      />
      <div className="ml-4">
        <p className="text-lg !text-black">{data.fullName || "none"}</p>
        <St>8 minutes read</St>
      </div>
    </div>
  );
}
