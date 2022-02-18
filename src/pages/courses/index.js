import React from "react";
import SimpleContainer from "../../components/container/container";
import RatingMui from "../../components/mini-components/ratings/ratings";
import SearchMui from "../../components/mini-components/search/search";
import TextFieldMui from "../../components/mini-components/textfield/textfield";
import MultipleSelectPlaceholder from "../../components/mini-components/select";

function Courses() {
  console.log("====================================");
  console.log("courses");
  console.log("====================================");
  return (
    <SimpleContainer>
      <div>
        <div>
          <h2 className="text-5xl font-bold py-12 text-slate-300">Courses</h2>
        </div>
        <div className="flex">
          <div>
            <div className="pl-0 ">
              <SearchMui className="py-3" sx={{ marginLeft: 0 }} />
            </div>
            <div className="flex flex-col" id="ratings">
              <p className="text-slate-500 font-weight-500 py-4">Ratings</p>
              <div>
                <div className="flex items-center gap-1">
                  <RatingMui className="py-2" sx={{ marginLeft: 0 }} /> {"&up"}
                </div>
                <div className="flex items-center gap-1">
                  <RatingMui className="py-2" sx={{ marginLeft: 0 }} /> {"&up"}
                </div>
                <div className="flex items-center gap-1">
                  <RatingMui className="py-2" sx={{ marginLeft: 0 }} /> {"&up"}
                </div>
              </div>
            </div>

            <div id="duation">
              <p className="text-slate-500 font-weight-500 py-4">Duration</p>
              <div>
                <MultipleSelectPlaceholder />
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
