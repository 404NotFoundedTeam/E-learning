import { Typography } from "@mui/material";
import React from "react";
import Owner from "../Owner";

export default function Post({ data }) {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg border border-slate-300">
      <img
        className="w-full h-[350px] object-cover"
        src={data.mainImg}
        alt={data.title}
      />
      <div className="flex flex-col">
        <div className="flex flex-1 p-4">
          <div className="data">
            <h3 className="border-b-slate-500 border-b font-semibold py-4 text-xl">
              {data.date.month}
            </h3>
            <h1 className="mt-4 font-extrabold text-4xl">{data.date.day}</h1>
          </div>
          <div className="flex-1 ml-5 overflow-x-clip">
            <a className="!text-2xl py-4 !font-[500] block">
              {data.title.length > 40
                ? data.title.slice(0, 40) + "..."
                : data.title}
            </a>
            <p className="text-sm w-full text-slate-700">
              {data.desc.slice(0, 80) + "..."}
            </p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="mx-auto w-full md:w-8/12">
            <Owner data={data.owner} />
          </div>
        </div>
      </div>
    </div>
  );
}
