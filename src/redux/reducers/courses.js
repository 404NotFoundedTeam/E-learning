// import { TOGGLE_THEME } from "../types";

const initialState = [
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3600,
    students: 180,
    level: "beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3600,
    students: 180,
    level: "beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3600,
    students: 180,
    level: "beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3600,
    students: 180,
    level: "beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5fd1c30b137241daebd0586af92cde0f-5234655-images-thumbs&n=13",
    name: "Design Masterclass Course",
    type: "design",
    price: 100,
    reviews: 3600,
    students: 180,
    level: "beginner",
    description:
      "Occaecati est et illo quibusdam accusamus qui Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur",
  },
];

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_RATING":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };

    default:
      return state;
  }
};

export default coursesReducer;
