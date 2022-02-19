import React from 'react';
import MainButton from '../../components/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Hero() {
  return (
    <div className='flex flex-wrap items-start mt-16'>
      <div className='w-full lg:w-6/12'>
        <h1 className='text-6xl font-bold capitalize md:pr-36 leading-[80px]'>
          Free <span className='text-[#919EAB]'>online</span> <span className='underline text-[#FA541C]'>courses</span> from the experts.
        </h1>
        <p className='text-gray-700 my-9 md:pr-28'>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet e.</p>
        <div>
          <MainButton variant='contained' className="!py-3 !px-4">Ready start <ArrowForwardIosIcon className='ml-3 !text-base' /></MainButton>
          <Link to='/' className='ml-5 text-gray-700 hover:text-black'>
            <Fab color="primary" className='hover:scale-105' aria-label="add">
              <PlayArrowIcon />
            </Fab>
            <span className='ml-3'>Watch here</span>
          </Link>
        </div>
      </div>
      <div className='w-full lg:w-6/12'>
        <img className='w-10/12 mx-auto' src="img/student.png" alt="" />
      </div>
    </div>
  )
}
