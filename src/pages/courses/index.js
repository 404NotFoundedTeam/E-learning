import React from "react";
import SimpleContainer from "../../components/container/container";
import RatingMui from "../../components/mini-components/ratings/ratings";
import SearchMui from "../../components/mini-components/search/search";
import TextFieldMui from "../../components/mini-components/textfield/textfield";
import MultipleSelectPlaceholder from "../../components/mini-components/select";
import BigCard from "../../components/BigCard/BigCard";
import BasicPagination from "../../components/mini-components/pagination/paginations";

const durations = [
  "0 - 1 Hour",
  "1 - 3 Hour",
  "3 - 6 Hour",
  "6 - 12 Hour",
  "18+ hours",
];

const category = [
  "managment",
  "marketing",
  "business",
  "development",
  "production",
  "Healthcare",
];

const datas = [
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_2.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_2.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_2.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_2.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_2.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_2.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_2.jpg",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3460,
    students: 180000,
    level: "Beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
];

const level = ["beginner", "elementary", "intermediate"];

const fee = ["free", "paid"];
const language = ["russian", "english", "french"];

function Courses() {
  return (
    <div className="container mx-auto">
      <div>
        <h2
          className="text-5xl font-bold py-12 pb-16"
          sx={{ color: "#212B36" }}
        >
          Courses
        </h2>
      </div>
      <div className="flex justify-between w-full gap-10">
        <div className="w-3/12">
          <div className="flex">
            <div>
              <div className="pl-0 ">
                <SearchMui className="py-3" sx={{ marginLeft: 0 }} />
              </div>
              <div className="flex flex-col" id="ratings">
                <p className="text-slate-500 font-weight-500 py-4">Ratings</p>
                <div>
                  <div className="flex items-center gap-1">
                    <RatingMui className="py-2" sx={{ marginLeft: 0 }} />
                    {"&up"}
                  </div>
                  <div className="flex items-center gap-1">
                    <RatingMui className="py-2" sx={{ marginLeft: 0 }} />
                    {"&up"}
                  </div>
                  <div className="flex items-center gap-1">
                    <RatingMui className="py-2" sx={{ marginLeft: 0 }} />
                    {"&up"}
                  </div>
                </div>
              </div>

              <div id="duation">
                <p className="text-slate-500 font-weight-500 pt-4 ">Duration</p>
                <div>
                  <MultipleSelectPlaceholder
                    sx={{ backgroundColor: "silver", paddingTop: 0 }}
                    names={durations}
                    placeholder="All durations"
                  />
                </div>
              </div>

              <div id="category">
                <p className="text-slate-500 font-weight-500 pt-4 pb-0">
                  Category
                </p>
                <div>
                  <MultipleSelectPlaceholder
                    sx={{ backgroundColor: "silver" }}
                    names={category}
                    placeholder="Category"
                  />
                </div>
              </div>

              <div id="fee">
                <p className="text-slate-500 font-weight-500 pt-4">Category</p>
                <div>
                  <MultipleSelectPlaceholder
                    sx={{ backgroundColor: "silver" }}
                    names={fee}
                    placeholder="fee"
                  />
                </div>
              </div>

              <div id="language">
                <p className="text-slate-500 font-weight-500 py-4">Language</p>
                <div>
                  <MultipleSelectPlaceholder
                    sx={{ backgroundColor: "silver" }}
                    names={language}
                    placeholder="language"
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-8/12">
          {datas.map((obj, i) => (
            <BigCard obj={obj} key={i} />
          ))}
          <div className="w-full text-center pt-10 ">
            <div className="mx-auto w-1/2">
              <BasicPagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
