import React, { useState } from "react";
import SimpleContainer from "../../components/container/container";
import RatingMui from "../../components/mini-components/ratings/ratings";
import SearchMui from "../../components/mini-components/search/search";
import TextFieldMui from "../../components/mini-components/textfield/textfield";
import MultipleSelectPlaceholder from "../../components/mini-components/select";
import BigCard from "../../components/BigCard/BigCard";
import BasicPagination from "../../components/mini-components/pagination/paginations";
import { useSelector } from "react-redux";
import CheckboxesTags from "../../components/mini-components/select/auto-select";
import MultiSelect from "../../components/mini-components/select/multipleSelect";
import { Button, ThemeProvider } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { createTheme } from "@mui/system";

function Courses() {
  const datas = useSelector((state) => state.courses.datas);
  const durations = useSelector((state) => state.courses.durations);
  const fee = useSelector((state) => state.courses.fee);
  const language = useSelector((state) => state.courses.language);
  const category = useSelector((state) => state.courses.category);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <SimpleContainer>
      <div className="container mx-auto flex-wrap">
        <div className="flex justify-between flex-row items-center">
          <h2
            className="text-5xl font-bold py-12 pb-16 flex-1"
            sx={{ color: "#212B36" }}
          >
            Courses
          </h2>
          <div className="md:hidden sm:block">
            <Button
              color="primary"
              variant="primary"
              bgcolor="secondary"
              onClick={() => setIsOpen(!isOpen)}
              sx={{
                backgroundColor: "#212B36",
                height: "40px",
                color: "#fff",
                "&:hover": { backgroundColor: "#123" },
              }}
            >
              <span className="mr-2">
                <FilterAltIcon />
              </span>
              Filter
            </Button>
          </div>
        </div>
        <div className="flex justify-between w-full gap-10 md:gap-1 flex-wrap">
          <div className="w-full md:w-3/12 lg:w-3/12">
            <div className="flex xs:hidden  md:block">
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
                    <MultiSelect data={durations} />
                    {/* <CheckboxesTags data={durations} /> */}
                  </div>
                </div>

                <div id="category">
                  <p className="text-slate-500 font-weight-500 pt-4 pb-0">
                    Category
                  </p>
                  <div>
                    <CheckboxesTags
                      data={category}
                      multiple="multiple"
                      sx={{ "& fieldset": { display: "none" } }}
                    />
                  </div>
                </div>

                <div id="fee">
                  <p className="text-slate-500 font-weight-500 pt-4">Fee</p>
                  <div>
                    <CheckboxesTags
                      data={fee}
                      multiple="multiple"
                      sx={{ "& fieldset": { display: "none" } }}
                    />
                  </div>
                </div>

                <div id="language">
                  <p className="text-slate-500 font-weight-500 py-4">
                    Language
                  </p>
                  <div>
                    <CheckboxesTags
                      data={language}
                      multiple="multiple"
                      sx={{ "& fieldset": { display: "none" } }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-8/12 lg:w-8/12 w-full">
            {datas.map((obj, i) => (
              <BigCard obj={obj} key={i} />
            ))}
            <div className="w-full text-center pt-10 ">
              <div className="w-full  md:w-full sm:w-full text-center flex justify-center items-center  lg:w-1/2  lg:mx-auto ">
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
