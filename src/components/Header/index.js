import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import MainButton from "../Button";
import Stack from "@mui/material/Stack";

export default function Header() {
  const toggleNav = () => {
    document.querySelector("nav").classList.toggle("hidden");
  };
  return (
    <header className="home--header flex items-center py-4 gap-12 container mx-auto">
      <MenuIcon onClick={toggleNav} className="lg:!hidden" />
      <Link to="/" className="text-2xl font-bold min-w-fit">
        E-learning
      </Link>
      <nav
        className="text-lg hidden flex flex-col-reverse justify-end absolute left-0 top-0 bg-white min-h-screen p-4 lg:relative lg:!flex-row 
      lg:w-full lg:min-h-min lg:!justify-between lg:p-0 lg:bg-transparent lg:text-[16px] lg:!flex"
      >
        <ul className="text-center lg:flex lg:gap-10 lg:items-center">
          <li className="mt-5 lg:mt-0">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="mt-5 lg:mt-0">
            <Link to="/posts">Posts</Link>
          </li>
          <li className="mt-5 lg:mt-0">
            <Link to="/about">About</Link>
          </li>
          <li className="mt-5 lg:mt-0">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="lg:flex lg:items-center lg:gap-3">
          <div className="flex align-items gap-3 justify-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <LanguageIcon />
            </IconButton>
          </div>
          <div className="h-[24px] w-[1px] bg-[#dddddd] hidden lg:block"></div>
          <div className="flex items-center gap-3">
            <MainButton variant="outlined">Join us</MainButton>
            <MainButton variant="contained">Buy now</MainButton>
          </div>
        </div>
        <IconButton
          className="absolute right-0 top-0 self-end lg:!hidden"
          onClick={toggleNav}
        >
          <CloseIcon className="!w-[18px] !h-[18px]" />
        </IconButton>
      </nav>
    </header>
  );
}
