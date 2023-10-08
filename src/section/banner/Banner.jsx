import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container pt-16">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
          <div className="overflow-hidden rounded-lg h-[25rem]">
            <img
              src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=996&t=st=1696789257~exp=1696789857~hmac=c4c91bd87aeb31264aabfae049126b68d9a53a2ec95df23bf35b1e300aab64f4"
              alt="banner"
              className="hover:scale-105 transition-transform ease-linear duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg h-[25rem]">
            <img
              src="https://img.freepik.com/free-photo/pollo-gastronomy-food-yummy-chicken_1350-59.jpg?w=996&t=st=1696789222~exp=1696789822~hmac=f3d0647ddf693bf9943d937dc3f0561d0c84243afc66eee3cf9e89b864978982"
              alt="banner"
              className="hover:scale-105 transition-transform ease-linear duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
