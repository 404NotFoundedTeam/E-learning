import React from 'react'
import { Link } from 'react-router-dom'
import CourseWrapper from './CourseWrapper'
import {
  FaAngleRight,
  FaClock,
  FaFile,
  FaGlobe,
  FaPlay,
  FaSignal,
  FaStar,
  FaUser,
} from 'react-icons/fa'
import { Fab } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { nanoid } from 'nanoid'
import Lessons from './Lessons'
import Instructors from './Instructors'
import Reviews from './Reviews'
import ViewCorses from './SimiliarCourse'
import { useSelector } from 'react-redux'
import { Register } from '../../components/HomeComponents'
export default function Course({ obj }) {
  const datas = useSelector((state) => state.courses.datas)

  const lessons = [
    {
      id: nanoid(),
      time: 60,
      open: false,
      about: 'lorem ipsum dolor sit amet, consectetur adipiscing elit lorerm',
    },
    {
      id: nanoid(),
      time: 58,
      open: false,
      about: 'Ipsum ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: nanoid(),
      time: 59,
      open: false,
      about: 'Dolor ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: nanoid(),
      time: 56,
      open: false,
      about: 'sit ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: nanoid(),
      time: 56,
      open: false,
      about: 'sit ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: nanoid(),
      time: 56,
      open: false,
      about: 'sit ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: nanoid(),
      time: 56,
      open: false,
      about: 'sit ipsum dolor sit amet, consectetur adipiscing elit',
    },

    {
      id: nanoid(),
      time: 56,
      open: true,
      about: 'sit ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: nanoid(),
      time: 56,
      open: true,
      about: 'sit ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ]

  console.log(obj)

  return (
    <CourseWrapper>
      <div className="items-center py-4 gap-12 container mx-auto bg-white mt-10 text-gray-600">
        <div className="flex items-center gap-2">
          <Link to="/">Home</Link>{' '}
          <span>
            <FaAngleRight />
          </span>
          <Link to="/course">course</Link>
          <span>
            <FaAngleRight />
          </span>
          <p>Design Masterclass Course</p>
        </div>
      </div>

      <div className="items-center py-4 gap-12 container mx-auto bg-white">
        <section className="container flex flex-wrap">
          <div className="md:w-8/12 sm:w-full lg:w-6/12">
            <div>
              <h2 className="bold font-bold text-3xl font-size-22 my-6">
                Design Masterclass Course
              </h2>
              <h4 className="text-blue-600 text-xs mb-6">DESIGN</h4>
              <p className="text-gray-500 mb-8 text-lg leading-8 tracking-tight">
                Occaecati est et illo quibusdam accusamus qui. Incidunt aut et
                molestiae ut facere aut. Est quidem iusto praesentium excepturi
                harum nihil tenetur facilis. Ut omnis voluptates nihil
                accusantium doloribus eaque debitis.
              </p>
              <div className="flex items-center">
                <div className="flex">
                  <FaStar className="star mr-1.5" />
                  <span className="font-medium text-[18px]">3.5</span>
                  <span className="text-gray-500 font-medium text-[14px] pr-3 border-r-2">
                    (3.46k reviews)
                  </span>
                </div>
                <div className="flex pl-3">
                  <span>180k</span>
                  <span>students</span>
                </div>
              </div>
              <div className=" border-b-2 border-gray-300 gap-1 flex align-center justify-start py-4">
                <span className="rounded-full bg-slate-300 p-2.5 mr-1">
                  <FaUser className="text-gray-600 text-lg" />
                </span>
                <p className="py-1 text-gray-700">Jayvion Simon</p>
                <p className="py-1 text-gray-500 underline">+ 5 teachers</p>
              </div>
              <div className="mb-32 text-gray-600 mt-10 text-sm ">
                <div className="flex gap-6 mb-4">
                  <span className="flex gap-1 items-center">
                    <FaClock /> 100 hours
                  </span>
                  <span className="flex gap-1 items-center">
                    <FaFile /> 9 Lessons
                  </span>
                  <span className="flex gap-1 items-center">
                    <FaSignal /> Beginner
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="flex gap-1 items-center">
                    <FaGlobe /> Russian, Spanish, English
                  </span>
                  <span className="flex gap-1 items-center">
                    <HelpOutlineIcon /> 100 Quizzes
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-8/12 sm:w-full lg:w-6/12 flex ">
            <div className="w-full  h-full flex  justify-end  ">
              <div
                className="flex items-center justify-center  w-7/12  bg-[url('https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg')] 
             object-cover rounded-xl  "
              >
                <div>
                  <Fab
                    color="inherit"
                    className="hover:scale-105"
                    aria-label="add"
                    size=""
                  >
                    <FaPlay className="text-xl" />
                  </Fab>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="items-center py-4 gap-12 container mx-auto bg-white">
        <Lessons lessons={lessons} />
        <Instructors />
        <Reviews />
        <ViewCorses coursesData={datas} />
        <Register />
      </div>
    </CourseWrapper>
  )
}
