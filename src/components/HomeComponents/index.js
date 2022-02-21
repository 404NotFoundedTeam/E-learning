import React from "react";

export default function Companies() {
  return (
    <div className="text-center mt-32">
      <p className="capitalize text-5xl font-bold">We work with</p>
      <p className="text-[#919EAB] my-5">
        Quisque aliquet, libero consequat elementum convallis.
      </p>
    </div>
  );
}

function Definition() {
  return (
    <div className="mt-24">
      <p className="text-[#FA541C] mb-14">NULLAM ACCUMSAN LOREM IN DUI.</p>
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-full lg:w-5/12 mb-5 lg:mb-0">
          <img
            src="https://zone-assets-api.vercel.app/assets/images/e-learning/course_langding_about.jpg"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full lg:w-6/12">
          <p className="font-bold text-3xl">
            Phasellus gravida semper nisi. Vestibulum rutrum
          </p>
          <p className="text-[#919EAB] my-5">
            Curabitur a felis in nunc fringilla tristique. Fusce egestas elit
            eget lorem. Etiam vitae tortor. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos hymenaeos.
          </p>
          <div className="flex mt-20 gap-16">
            <div className="w-6/12 text-[#919EAB]">
              <div className="bg-[#FA541C] w-[30px] h-[4px] mb-4"></div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis
              </p>
            </div>
            <div className="w-6/12 text-[#919EAB]">
              <div className="bg-[#FA541C] w-[30px] h-[4px] mb-4"></div>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedCategory() {
  return <div className="flex flex-wrap"></div>;
}

export { Definition };
