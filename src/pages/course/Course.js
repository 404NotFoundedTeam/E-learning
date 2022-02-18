import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import CourseWrapper from './CourseWrapper'
import { FaAngleRight, FaClock, FaStar, FaUser } from 'react-icons/fa'
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
        <section className="">
          <div className="col-1/2">
            <h2>Design Masterclass Course</h2>
            <h4>Design</h4>
            <p>
              Occaecati est et illo quibusdam accusamus qui. Incidunt aut et
              molestiae ut facere aut. Est quidem iusto praesentium excepturi
              harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium
              doloribus eaque debitis.
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
            <div className="py-10 border-b-2 border-gray-300">
              <span>
                <FaUser />
              </span>
              <span>Jayvion Simon</span>
              <span>+ 5 teachers</span>
            </div>
            <div className="flex gap-2">
              <span>
                <FaClock /> 100 hours
              </span>
              <span>
                <FaClock /> 100 hours
              </span>
              <span>
                <FaClock /> 100 hours
              </span>
            </div>
            <div className="flex gap-2">
              <span>
                <FaClock /> 100 hours
              </span>
              <span>
                <FaClock /> 100 hours
              </span>
              <span>
                <FaClock /> 100 hours
              </span>
            </div>
          </div>
          <div className="col-1/2"></div>
        </section>
      </div>
    </CourseWrapper>
  )
}
