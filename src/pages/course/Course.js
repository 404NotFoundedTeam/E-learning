import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import CourseWrapper from './CourseWrapper'
import {
  FaAngleRight,
  FaClock,
  FaFile,
  FaGlobe,
  FaPlay,
  FaQuestion,
  FaSignal,
  FaStar,
  FaUser,
} from 'react-icons/fa'
import { IconButton } from '@mui/material'
export default function Course() {
  return (
    <CourseWrapper>
      <Header />
      <div className="flex items-center px-5 py-4 gap-12 container mx-auto bg-white">
        <div className="flex items-center gap-1.5">
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

      <div className="flex items-center px-5 py-4 gap-12 container mx-auto  bg-white">
        <section className="container flex">
          <div className="w-6/12">
            <div>
              <h2 className="bold font-bold text-3xl font-size-22 my-6">
                Design Masterclass Course
              </h2>
              <h4 className="text-blue-600 text-xs mb-6">DESIGN</h4>
              <p>
                Occaecati est et illo quibusdam accusamus qui. Incidunt aut et
                molestiae ut facere aut. Est quidem iusto praesentium excepturi
                harum nihil tenetur facilis. Ut omnis voluptates nihil
                accusantium doloribus eaque debitis.
              </p>
              <div className="flex">
                <div className="flex">
                  <FaStar />
                  <span>3.5</span>
                  <span>(3.46k reviews)</span>
                </div>
                <div className="flex">
                  <span>180k</span>
                  <span>students</span>
                </div>
              </div>
              <div className=" border-b-2 border-gray-300 gap-1 flex align-center justify-start py-4">
                <span className="rounded-full bg-slate-300 p-2.5 ">
                  <FaUser />
                </span>
                <p className="py-1">Jayvion Simon</p>
                <p className="py-1">+ 5 teachers</p>
              </div>
              <div className="mb-20">
                <div className="flex gap-6">
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
                    <FaQuestion /> 100 Quizzes
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-6/12">
            <div
              className="flex items-center justify-center h-full w-7/12 mx-auto bg-[url('https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg')] 
             object-cover rounded-lg"
            >
              <div className="p-2 rounded-full bg-white">
                <IconButton
                  size="large"
                  aria-label="fingerprint"
                  color="secondary"
                >
                  <FaPlay />
                </IconButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </CourseWrapper>
  )
}
