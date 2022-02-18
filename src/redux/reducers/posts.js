import * as t from "../types";

const initialState = {
  posts: [
      {
          active: true,
          title: "The A - Z Of Event",
          mainImg: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
          data: {day: 16, month: "Mar", year: 2020},
          desc: "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",  
          owner: {
              img: "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
              fullName: "Lucian Obrien",
          }
      },
      {
        title: "Believing These 7 Myths About Event Keeps You From Growing",
        mainImg: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
        data: {day: 16, month: "Mar", year: 2020},
        desc: "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",  
        owner: {
            img: "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg",
            fullName: "Jayvion Simon",
        }
    },
    {
        title: "Don't Waste Time! 7 Facts Until You Reach Your Event",
        mainImg: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_3.jpg",
        data: {day: 16, month: "Mar", year: 2020},
        desc: "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",  
        owner: {
            img: "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg",
            fullName: "Reece Chung",
        }
    },

    {
        title: "Believing These 7 Myths About Event Keeps You From Growing",
        mainImg: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
        data: {day: 16, month: "Mar", year: 2020},
        desc: "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",  
        owner: {
            img: "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg",
            fullName: "Jayvion Simon",
        }
    },

    {
        title: "Believing These 7 Myths About Event Keeps You From Growing",
        mainImg: "https://zone-assets-api.vercel.app/assets/images/e-learning/course_1.jpg",
        data: {day: 16, month: "Mar", year: 2020},
        desc: "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",  
        owner: {
            img: "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg",
            fullName: "Jayvion Simon",
        }
    },


  ]
};

const postsReducer = (state = initialState, action) => {
  switch(action.type){
      default: return state;
  }
};

export default postsReducer;
