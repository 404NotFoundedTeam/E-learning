import GradeIcon from "@mui/icons-material/Grade";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import numeral from "numeral";
import { NavLink } from "react-router-dom";

export default function BigCard({ obj }) {
  return (
    <div className="big-card flex w-full rounded-2xl  overflow-hidden h-90 mb-8">
      <div className="left w-4/12 h-full">
        <img
          src={obj.img}
          alt={obj.name}
          className="w-full h-full object-cover"
          lazy="loading"
        />
      </div>
      <div className="right p-6 w-8/12 h-full flex flex-col bg-white justify-around">
        <div>
          <div className="flex justify-between">
            <h3
              className=" text-sm font-bold"
              style={{ color: "rgb(250, 84, 28)", fontSize: "0.75rem" }}
            >
              {obj.type.toUpperCase()}
            </h3>
            <p
              className="font-bold text-2xl"
              style={{
                color: "rgb(33, 43, 54)",
                boxShadow: "rgb(145 158 171 / 16%) -16px 16px 56px -8px",
              }}
            >
              {obj.oldPrice && (
                <del className="mr-3 text-xl">${obj.oldPrice}</del>
              )}{" "}
              ${obj.price}
            </p>
          </div>
          <NavLink to={`${obj.name}`}>
            <h3 className="text-slate-800 pb-2 font-bold text-md">
              {obj.name}
            </h3>
          </NavLink>
          <p className="text-sm  text-slate-400">{obj.description}</p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div>
            <GradeIcon sx={{ color: "#FDD627" }} />{" "}
            <span>
              <span className="font-bold text-slate-700">
                {" "}
                {numeral(obj.reviews).format("0.0a").slice(0, -1)}
              </span>
              <span className="text-slate-300 underline">
                ( {numeral(obj.reviews).format("0.00a")} reviews )
              </span>
            </span>
            <span className="mx-3 text-slate-400"> | </span>
            <span>
              <span className=" font-bold text-slate-700  mr-1">
                {numeral(obj.students).format("0a")}
              </span>
              students
            </span>
          </div>
          <div className="flex items-center py-4">
            <Avatar /> <h3 className="ml-3 mr-1">Jayvion Simon </h3>{" "}
            <a href="#" className="text-slate-400  ">
              +5 teachers
            </a>
          </div>
          <div className="flex gap-5 text-slate-400">
            <div className="flex items-center text-sm">
              <AccessTimeIcon /> <span className="mr-4 ml-2">100hours</span>
            </div>
            <div className="flex items-center text-sm">
              <BarChartIcon /> <span>{obj.level}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
