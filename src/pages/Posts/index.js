import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImgBox from "../../components/ImgBox";
import St from "../../components/St";
import Post from "../../components/Post.js";
import Owner from "../../components/Owner";
import SearchMui from "../../components/mini-components/search/search";
import { Button } from "@mui/material";
import ShadowBox from "./ShadowBox";
import BasicPagination from "../../components/mini-components/pagination/paginations";
import MainButton from "../../components/Button";

export default function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  const activePost = posts[0];
  const categories = useSelector((state) => state.posts.categories);
  const popularTags = useSelector((state) => state.posts.popularTags);
  return (
    <PostsWrapper>
      <div className="p-5 container mx-auto main-posts">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-full h-[600px] lg:w-7/12 p-3">
            <ImgBox src={activePost.mainImg} alt={activePost.title} />
          </div>
          <div className="w-full sm:w-full py-7 flex flex-col justify-between lg:w-5/12 px-5">
            <div className="">
              <St classNames={"text-sm"}>
                {activePost.date.day +
                  " " +
                  activePost.date.month +
                  " " +
                  activePost.date.year +
                  " · 8 minutes read"}
              </St>
              <a href="#" className="my-5 block !text-[32px]">
                {activePost.title}
              </a>
              <p className="py-5 text-lg">{activePost.desc}</p>
            </div>
            <div className="w-full md:w-8/12 mx-auto">
              <Owner data={activePost.owner} />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-wrap mt-32">
          <div className="px-3 py-4 w-full">
            <SearchMui className={"py-2 w-full lg:hidden"} placeholder="hello" />
          </div>
          <div className="postsBlock flex flex-wrap w-full lg:w-8/12">
            {posts.map((item, i) => (
              <div key={i} className="w-full sm:w-3/4 mx-auto md:w-1/2 p-3">
                <Post data={item} />
              </div>
            ))}
            <BasicPagination className="my-5 mx-auto" />
          </div>
          <div className="w-full lg:w-4/12 p-3 px-5">
            <SearchMui className={"py-2 hidden lg:block"} placeholder="hello" />

            <div className="categories py-5">
              <h3 className="font-bold text-2xl">Categories</h3>
              <ul className="mt-4 list-disc ">
                {categories.map((item, i) => (
                  <li key={i} className="py-2 text-sm ml-7">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="recent-posts py-5">
              <h3 className="font-bold text-2xl mb-5">Recent posts</h3>
              {posts.reverse().map((item, i) => (
                <div key={i} className="items-center w-full flex py-3">
                  <ImgBox
                    src={item.mainImg}
                    alt={item.title}
                    classNames="w-[70px] h-[70px]"
                  />
                  <div className="ml-4">
                    <a className="font-bold block text-sm mb-3">
                      {item.title.slice(0, 20)}
                    </a>
                    <St>{item.desc.slice(0, 40)}</St>
                  </div>
                </div>
              ))}
            </div>
            <div className="tegs py-5">
              <h3 className="font-bold text-2xl py-5">Popular tags</h3>

              <div className="py-4">
                {popularTags.map((item, i) => (
                  <Button
                    key={i + item}
                    variant={"contained"}
                    className="!m-2 !font-light !text-gray-600  !bg-slate-100 !shadow-sm !rounded-xl"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="shadow box">
              <ShadowBox
                src={
                  "https://zone-assets-api.vercel.app/assets/images/e-learning/course_8.jpg"
                }
                title={"Advertisement"}
                text={"Duis leo. Donec orci lectus, aliquam ut, faucibus non"}
                btn={{ text: "Go Now", click: () => {} }}
              />
            </div>
          </div>
        </div>
        <div className="py-7 register mb-10 bg-[#fff2ed] rounded-xl !mt-20 flex flex-wrap">
          <div className="lg:w-7/12 p-7 text-center flex flex-col justify-center items-center ">
            <div className="w-full j:w-10/12 xl:w-8/12">
              <h2 className="font-bold leading-normal text-3xl my-4">
                Register Now Forget 20% Discount Every Courses
              </h2>
              <p className="text-md text-black my-5">
                Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                lacus. Sed magna purus, fermentum eu
              </p>

              <div className="mt-7 flex w-full h-[50px] overflow-hidden bg-white rounded-lg p-1.5">
                <input
                  placeholder="Enter your email"
                  className="flex-1 text-sm bg-transparent px-2 outline-none border-0 h-full"
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
      </div>
    </PostsWrapper>
  );
}

const PostsWrapper = styled.div`
  .main-posts {
    a {
      font-size: 18px;
      font-weight: 600;
      transition: all 0.3s ease;
      color: #000;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      line-height: 1.5;
      color: #637381;
    }
  }
  li {
    &::marker {
      color: red;
      /* content: "►"; */
    }
  }
`;
