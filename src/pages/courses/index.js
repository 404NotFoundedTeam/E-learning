import React from "react";
import SimpleContainer from "../../components/container/container";
import RatingMui from "../../components/mini-components/ratings/ratings";
import SearchMui from "../../components/mini-components/search/search";
import TextFieldMui from "../../components/mini-components/textfield/textfield";
import MultipleSelectPlaceholder from "../../components/mini-components/select";
import BigCard from "../../components/BigCard/BigCard";
import BasicPagination from "../../components/mini-components/pagination/paginations";
import { useSelector } from "react-redux";

function Courses() {
  const datas = useSelector((state) => state.courses.datas);
  const durations = useSelector((state) => state.courses.durations);
  const fee = useSelector((state) => state.courses.fee);
  const language = useSelector((state) => state.courses.language);
  const category = useSelector((state) => state.courses.category);
  console.log(datas);
  console.log(durations);
  console.log(fee);
  console.log(language);
  console.log(category);

  return (
    <SimpleContainer>
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
                  <p className="text-slate-500 font-weight-500 pt-4 ">
                    Duration
                  </p>
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
                  <p className="text-slate-500 font-weight-500 pt-4">
                    Category
                  </p>
                  <div>
                    <MultipleSelectPlaceholder
                      sx={{ backgroundColor: "silver" }}
                      names={fee}
                      placeholder="fee"
                    />
                  </div>
                </div>

                <div id="language">
                  <p className="text-slate-500 font-weight-500 py-4">
                    Language
                  </p>
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
    </SimpleContainer>
  );
}

export default Courses;
