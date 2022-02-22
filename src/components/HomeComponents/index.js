import React from "react";
import MainButton from "../Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useSelector } from "react-redux";
import Post from "../Post.js";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";

function Hero() {
  return (
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
  );
}

export default function Companies() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  let companiesLogos = [
    "https://zone-assets-api.vercel.app/assets/logos/slack_original.svg",
    "https://zone-assets-api.vercel.app/assets/logos/tripadvisor_original.svg",
    "https://zone-assets-api.vercel.app/assets/logos/vimeo_original.svg",
    "https://zone-assets-api.vercel.app/assets/logos/airbnb_original.svg",
    "https://zone-assets-api.vercel.app/assets/logos/dropbox_original.svg",
    "https://zone-assets-api.vercel.app/assets/logos/facebook_original.svg",
    "https://zone-assets-api.vercel.app/assets/logos/google_original.svg",
    "https://zone-assets-api.vercel.app/assets/logos/heroku_original.svg",
    "https://zone-assets-api.vercel.app/assets/logos/lenovo_original.svg",
  ];
  return (
    <div className="text-center mt-32">
      <p className="capitalize text-5xl font-bold">We work with</p>
      <p className="text-[#919EAB] my-5">
        Quisque aliquet, libero consequat elementum convallis.
      </p>
      <Slider {...settings} className="my-20">
        {companiesLogos.map((link) => {
          return (
            <div className="outline-none">
              <img className="md:w-6/12 w-[150px] mx-auto" src={link} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

function CourseCard({ img, name, level, students, reviews, type, price }) {
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
          <Link to={"courses"}>{name}</Link>
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
  );
}
class FeaturedCourses extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
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
    };
    return (
      <div>
        <p className="text-5xl font-bold leading-[70px]">Featured Courses</p>
        <div className="flex justify-between">
          <p className="text-[#919EAB]">
            Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet
            iaculis.
          </p>
          <div className="min-w-fit">
            <IconButton onClick={this.previous}>
              <ArrowRightAltIcon className="rotate-180" />
            </IconButton>
            <IconButton onClick={this.next}>
              <ArrowRightAltIcon />
            </IconButton>
          </div>
        </div>
        <Slider
          {...settings}
          ref={(c) => (this.slider = c)}
          className="mt-10 flex"
        >
          {this.props.coursesData.map((course) => {
            console.log(
              "🚀 ~ file: index.js ~ line 222 ~ FeaturedCourses ~ {this.props.coursesData.map ~ course",
              course
            );
            return <CourseCard {...course} />;
          })}
        </Slider>
      </div>
    );
  }
}

function Definition() {
  return (
    <div className="mt-24">
      <p className="text-[#FA541C] mb-14">NULLAM ACCUMSAN LOREM IN DUI.</p>
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-full lg:w-5/12 mb-5 lg:mb-0">
          <img
            src="https://zone-assets-api.vercel.app/assets/images/e-learning/course_langding_about.jpg"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full lg:w-6/12">
          <p className="font-bold text-3xl">
            Phasellus gravida semper nisi. Vestibulum rutrum
          </p>
          <p className="text-[#919EAB] my-5">
            Curabitur a felis in nunc fringilla tristique. Fusce egestas elit
            eget lorem. Etiam vitae tortor. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos hymenaeos.
          </p>
          <div className="flex mt-20 gap-16">
            <div className="w-6/12 text-[#919EAB]">
              <div className="bg-[#FA541C] w-[30px] h-[4px] mb-4"></div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis
              </p>
            </div>
            <div className="w-6/12 text-[#919EAB]">
              <div className="bg-[#FA541C] w-[30px] h-[4px] mb-4"></div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseBox({ title, students }) {
  return (
    <div className="border rounded-xl hover:bg-[#eee] hover:cursor-pointer transition-all p-6 text-[22px] flex flex-col justify-between">
      <p className="font-medium text-[17px] capitalize">{title}</p>
      <p className="text-[15px] text-[#919EAB]">{students} students</p>
    </div>
  );
}

function FeaturedCategory(props) {
  const navigate = useNavigate();
  const navigateCourses = () => navigate("/courses");
  return (
    <div className="flex flex-wrap flex-col-reverse lg:flex-row justify-between mt-24">
      <div className="w-full lg:w-4/12">
        <p className="text-5xl font-bold leading-[70px]">Featured Category</p>
        <p className="text-[#919EAB] my-7">
          Since wire-frame renderings are relatively simple and fast to
          calculate, they are often used in cases
        </p>
        <MainButton
          onClick={navigateCourses}
          variant="contained"
          className="!py-3 !px-4 !text-[18px]"
        >
          Explore More
        </MainButton>
      </div>
      <div className="w-full lg:w-7/12 grid grid-flow-row grid-cols-[repeat(auto-fill,_minmax(170px,1fr))] grid-rows-[repeat(3,_minmax(140px,140px))] gap-4">
        {props.coursesList.map((course) => (
          <CourseBox {...course} key={course.title} />
        ))}
      </div>
    </div>
  );
}

function LatestPosts() {
  const navigate = useNavigate();
  const navigatePosts = () => navigate("/posts");
  const posts = useSelector((state) => state.posts.posts);
  return (
    <div className="mt-24">
      <div className="flex justify-between">
        <p className="text-5xl font-bold">Latest Posts</p>
        <MainButton
          onClick={navigatePosts}
          variant={"outlined"}
          className="!border-0 !text-[#FA541C]"
        >
          View All <ArrowRightAltIcon />
        </MainButton>
      </div>
      <div className="postsBlock flex flex-wrap w-full mt-10">
        {posts.slice(0, 3).map((item, i) => (
          <div key={i} className="w-full md:w-1/2 mb-4 lg:w-4/12 md:pr-5">
            <Post data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Register() {
  return (
    <div className="py-7 register mb-10 bg-[#fff2ed] rounded-xl !mt-20 flex flex-wrap">
      <div className="lg:w-7/12 p-7 text-center flex flex-col justify-center items-center ">
        <div className="w-full j:w-10/12 xl:w-8/12">
          <h2 className="font-bold leading-normal text-3xl my-4">
            Register Now Forget 20% Discount Every Courses
          </h2>
          <p className="text-md text-black my-5">
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
            Sed magna purus, fermentum eu
          </p>

          <div className="mt-7 flex w-full flex-wrap overflow-hidden bg-white rounded-lg p-1.5">
            <input
              placeholder="Enter your email"
              className="flex-1 w-full text-sm bg-transparent px-2 py-2 outline-none border-0 h-full"
            />
            <MainButton variant={"contained"}>Register</MainButton>
          </div>
        </div>
      </div>
      <div className="lg:w-5-12 p-4 text-center mx-auto">
        <img
          className="w-full object-cover"
          src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_newsletter.svg"
        />
      </div>
    </div>
  );
}

export {
  Hero,
  Definition,
  FeaturedCategory,
  LatestPosts,
  Register,
  FeaturedCourses,
};
