import React from "react";

import Companies, {
  Definition,
  FeaturedCategory,
  Hero,
  LatestPosts,
  Register,
} from "../HomeComponents";

const courses = [
  { title: "Python", students: 101 },
  { title: "JavaScript", students: 101 },
  { title: "Java", students: 108 },
  { title: "C++", students: 39 },
  { title: "C#", students: 39 },
  { title: "Managment", students: 39 },
  { title: "Cyber Security", students: 39 },
  { title: "web development", students: 39 },
  { title: "Machine learning", students: 39 },
  { title: "Design", students: 39 },
  { title: "UI/UX", students: 39 },
  { title: "System Adminstration", students: 39 },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <Definition />
      <FeaturedCategory coursesList={courses} />
      <LatestPosts />
      <Register />
    </>
  );
}
