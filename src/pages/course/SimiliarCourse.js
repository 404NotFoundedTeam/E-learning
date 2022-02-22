import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import { IconButton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import PersonIcon from '@mui/icons-material/Person'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import BarChartIcon from '@mui/icons-material/BarChart'
import MainButton from '../../components/Button/index.js'
import { FaArrowRight } from 'react-icons/fa'

function CourseCard2({ img, name, level, students, reviews, type, price }) {
  return (
    <div className="rounded-[20px] h-full card-shadow mb-3 sm:mr-3 mr-0">
      <img
        className="w-full rounded-[20px_20px_0_0] h-[90%] object-cover"
        src={img}
        alt=""
      />
      <div className="p-5">
        <div className="flex justify-between items-center">
          <span className="text-[#FA541C] font-medium capitalize">{type}</span>
          <div>
            <span className="text-[20px] font-bold">${price.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-[20px] my-8">
          <Link to={'courses'}>{name}</Link>
        </p>
        <div className="flex items-center my-8">
          <StarIcon className="!fill-yellow-500" />
          <span className="mx-1">
            3.5
            <span className="text-[#919EAB]">
              ({(reviews / 1000).toFixed(2)}k views)
            </span>
          </span>
          <span className="text-[#919EAB] mx-3 inline-block">|</span>
          <span className="font-bold mx-2"> 180k</span> students
        </div>
        <div className="items-center flex">
          <div className="bg-[#919EAB] w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <PersonIcon />
          </div>
          <span className="mx-3 font-medium">Javy Simon</span> + 5 teachers
        </div>
        <hr className="my-8 bg-[#919EAB]" />
        <div className="text-[#919EAB] items-center">
          <AccessTimeIcon />
          <span className="mx-3">100 hours</span>
          <BarChartIcon />
          <span className="mx-3">{level}</span>
        </div>
      </div>
    </div>
  )
}

class ViewCorses extends React.Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="mt-16">
        <div className="flex justify-between items-center">
          <p className="text-5xl font-bold leading-[70px]">Similar Courses</p>
          <div className="min-w-fit">
            <Link to="../courses">
              <MainButton
                children={'View All'}
                variant="outline"
                endIcon={<ArrowRightAltIcon />}
                onClick={() => {
                  console.log('aaa')
                }}
                sx={{
                  fontSize: '16px',
                  color: 'rgb(250, 84, 28)',
                }}
              />
            </Link>
          </div>
        </div>
        <Slider
          {...settings}
          ref={(c) => (this.slider = c)}
          className="mt-10 flex"
        >
          {this.props.coursesData.map((course) => {
            console.log(
              '🚀 ~ file: index.js ~ line 222 ~ ViewCorses ~ {this.props.coursesData.map ~ course',
              course,
            )
            return <CourseCard2 {...course} />
          })}
        </Slider>
      </div>
    )
  }
}

export default ViewCorses
