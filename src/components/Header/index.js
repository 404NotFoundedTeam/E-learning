import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import MainButton from '../Button'
import Stack from '@mui/material/Stack'

export default function Header() {
  return (
    <header className="home--header flex items-center py-4 gap-12 container mx-auto">
      <Link to="/" className="text-2xl font-bold min-w-fit">
        E-learning
      </Link>
      <nav className="text-sm flex justify-between w-full">
        <ul className="flex items-center gap-10">
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <div className="flex align-items gap-3">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <LanguageIcon />
            </IconButton>
          </div>
          <div className="h-[24px] w-[1px] bg-[#dddddd]"></div>
          <div className="flex items-center gap-3 pl-3">
            <MainButton variant="outlined">Join us</MainButton>
            <MainButton variant="contained">Buy now</MainButton>
          </div>
        </div>
      </nav>
    </header>
  )
}
