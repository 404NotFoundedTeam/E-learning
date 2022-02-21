import React from "react";
import MainButton from "../../components/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Companies, {
  Definition,
  FeaturedCategory,
  LatestPosts,
  Register,
} from "../HomeComponents";

const courses = [
  { title: "Python", students: 101 },
  { title: "JavaScript", students: 101 },
  { title: "Java", students: 108 },
  { title: "C++", students: 39 },
  { title: "C#", students: 39 },
  { title: "Managment", students: 39 },
  { title: "Cyber Security", students: 39 },
  { title: "web development", students: 39 },
  { title: "Machine learning", students: 39 },
  { title: "Design", students: 39 },
  { title: "UI/UX", students: 39 },
  { title: "System Adminstration", students: 39 },
];

export default function Hero() {
  return (
    <>
      <div className="flex flex-wrap items-start mt-16 flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-6/12">
          <h1 className="text-6xl font-bold capitalize lg:pr-36 leading-[80px]">
            Free <span className="text-[#919EAB]">online</span>{" "}
            <span className="underline text-[#FA541C]">courses</span> from the
            experts.
          </h1>
          <p className="text-[#919EAB] my-9 lg:pr-28">
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
            sapien, quis venenatis ante odio sit amet e.
          </p>
          <div>
            <MainButton variant="contained" className="!py-3 !px-4">
              Ready start <ArrowForwardIosIcon className="ml-3 !text-base" />
            </MainButton>
            <Link to="/" className="ml-5 text-gray-700 hover:text-black">
              <Fab color="primary" className="hover:scale-105" aria-label="add">
                <PlayArrowIcon />
              </Fab>
              <span className="ml-3">Watch here</span>
            </Link>
          </div>
          <div className="flex mt-12 border-t border-dotted border-gray-300 pt-10">
            <div className="w-4/12">
              <p className="text-3xl font-bold">14k+</p>
              <p className="text-[#919EAB]">Learners</p>
            </div>
            <div className="w-4/12">
              <p className="text-3xl font-bold">1.05k+</p>
              <p className="text-[#919EAB]">Courses</p>
            </div>
            <div className="w-4/12">
              <p className="text-3xl font-bold">59k+</p>
              <p className="text-[#919EAB]">Graduates</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            className="w-10/12 mx-auto mt-[-25px]"
            src="img/student.png"
            alt=""
          />
        </div>
      </div>
      <Companies />
      <Definition />
      <FeaturedCategory coursesList={courses} />
      <LatestPosts />
      <Register />
    </>
  );
}
