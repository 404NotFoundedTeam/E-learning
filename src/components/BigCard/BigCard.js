import GradeIcon from "@mui/icons-material/Grade";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function BigCard({ obj }) {
  return (
    <div className="big-card flex w-full rounded-t-md rounded-l-3xl overflow-hidden h-96 ">
      <div className="left w-4/12 h-full">
        <img src={obj.img} alt={obj.name} className="w-full h-full" />
      </div>
      <div className="right p-8 w-8/12 h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <h3 className="text-orange-400 text-sm font-weight-500">
              {obj.type.toUpperCase()}
            </h3>
            <p className="text-slate-700 font-bold text-2xl">${obj.price}</p>
          </div>
          <h3 className="text-slate-800 pb-2 font-bold text-md">{obj.name}</h3>
          <p className="text-sm  text-slate-400">{obj.description}</p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div>
            <GradeIcon sx={{ color: "yellow" }} /> <span>{obj.reviews}</span> |{" "}
            <span>
              <span className="text-black">{obj.students} </span>students
            </span>
          </div>
          <div className="flex items-center py-4">
            <Avatar /> <h3 className="ml-3 mr-1">Jayvion Simon </h3>{" "}
            <a href="#" className="text-slate-400  ">
              {" "}
              +5 teachers
            </a>
          </div>
          <div className="flex gap-5 text-slate-400">
            <div className="flex items-center">
              <AccessTimeIcon /> <span>100hours</span>
            </div>
            <div className="flex items-center">
              <BarChartIcon /> <span>{obj.level}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
