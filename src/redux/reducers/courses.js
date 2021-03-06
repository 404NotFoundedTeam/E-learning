// import { TOGGLE_THEME } from "../types";

const initialState = {
  datas: [
    {
      id: 0,
      img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
      name: "Design Masterclass Course",
      type: "Marketing",
      price: 500,
      reviews: 12500,
      students: 635000,
      level: "Elementary",
      description:
        "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
    },
    {
      id: 1,
      img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_2.jpg",
      name: "Design Masterclass Course",
      type: "design",
      price: 961,
      oldPrice: 240,
      reviews: 5400,
      students: 180000,
      level: "Beginner",
      description:
        "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
      name: "Design Masterclass Course",
      type: "Business",
      price: 424.26,
      reviews: 4200,
      students: 70000,
      level: "Beginner",
      description:
        "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
    },
    {
      img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_3.jpg",
      name: "Design Masterclass Course",
      type: "design",
      price: 280,
      reviews: 9800,
      students: 280000,
      level: "Beginner",
      description:
        "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
    },
    {
      img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_4.jpg",
      name: "Design Masterclass Course",
      type: "design",
      price: 400,
      reviews: 4460,
      students: 240000,
      level: "Elementary",
      description:
        "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
    },
    {
      img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
      name: "Design Masterclass Course",
      type: "design",
      price: 100,
      reviews: 4265,
      students: 180000,
      level: "Beginner",
      description:
        "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
    },
    {
      img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_5.jpg",
      name: "Design Masterclass Course",
      type: "design",
      price: 100,
      oldPrice: 89,
      reviews: 3460,
      students: 180000,
      level: "Beginner",
      description:
        "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
    },
    {
      img: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_6.jpg",
      name: "Design Masterclass Course",
      type: "design",
      price: 100,
      reviews: 3460,
      students: 180000,
      level: "Beginner",
      description:
        "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
    },

  ],
  level: ["beginner", "elementary", "intermediate"],
  fee: ["free", "paid"],
  language: ["russian", "english", "french"],
  category: [
    "managment",
    "marketing",
    "business",
    "development",
    "production",
    "Healthcare",
  ],
  durations: [
    "0 - 1 Hour",
    "1 - 3 Hour",
    "3 - 6 Hour",
    "6 - 12 Hour",
    "18+ hours",
  ],
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_RATING":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };

    default:
      return state;
  }
};

export default coursesReducer;
