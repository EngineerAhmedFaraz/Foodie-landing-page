import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <>
      <div className=" block  lg:hidden w-[12rem] h-[100vh] fixed z-20 bg-gray-800 ease-linear duration-200 ">
        <div className="flex  justify-between items-center pt-8 px-4">
          <h1 className="text-xl font-medium uppercase font-serif text-white underline underline-offset-4">
            Daily Dose
          </h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
