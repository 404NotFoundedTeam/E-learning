import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImgBox from "../../components/ImgBox";
import St from "../../components/St";
import Post from "../../components/Post.js";
import Owner from "../../components/Owner";
import { Input } from "@mui/material";
import SearchMui from "../../components/mini-components/search/search";

export default function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  const activePost = posts[0];
  const categories = useSelector((state) => state.posts.categories);
  return (
    <ProstsWrapper>
      <div className="p-5 container main-posts mx-auto">
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
          <div className="postsBlock flex flex-wrap w-full lg:w-8/12">
            {posts.map((item, i) => (
              <div key={i} className="w-full sm:w-1/2 p-3">
                <Post data={item} />
              </div>
            ))}
          </div>
          <div className="w-full md:w-4/12 p-3 px-5">
            <SearchMui className={"py-2 "} placeholder="hello" />

            <div className="categories py-7">
              <h3 className="font-bold text-2xl">Categories</h3>
              <ul className="mt-4 list-disc ">
                {categories.map((item, i) => (
                  <li key={i} className="py-2 text-sm ml-7">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="recent-posts">
              
            </div>
          </div>
        </div>
      </div>
    </ProstsWrapper>
  );
}

const ProstsWrapper = styled.div`
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
