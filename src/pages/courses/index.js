import React from "react";
import SimpleContainer from "../../components/container/container";
import RatingMui from "../../components/mini-components/ratings/ratings";
import SearchMui from "../../components/mini-components/search/search";
import TextFieldMui from "../../components/mini-components/textfield/textfield";

function Courses() {
  console.log("====================================");
  console.log("courses");
  console.log("====================================");
  return (
    <SimpleContainer>
      <div>
        <div>
          <h2 className="text-5xl font-bold py-16 text-slate-300">Courses</h2>
        </div>
        <div className="flex">
          <div>
            <div className="pl-0 ">
              <SearchMui sx={{ marginLeft: 0, backgroundColor: "silver" }} />
            </div>
            <div className="flex flex-col" id="ratings">
              <p className="text-slate-300">Ratings</p>
              <div>
                <div>
                  <RatingMui /> {"&up"}
                </div>
                <div>
                  <RatingMui /> {"&up"}
                </div>
                <div>
                  <RatingMui /> {"&up"}
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </SimpleContainer>
  );
}

export default Courses;
