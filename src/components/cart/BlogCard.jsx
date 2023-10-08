import React from "react";

const BlogCard = ({ img, title, date, comment }) => {
  return (
    <>
      <div className="space-y-4 opacity-[.7] hover:opacity-[10]">
        <img
          src={img}
          alt="img"
          className="rounded-lg hover:scale-105 transition-transform ease-linear duration-300"
        />
        <div className="text-green-500 font-medium">
          <span>{date}/</span>
          <span>{comment} comments </span>
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
    </>
  );
};

export default BlogCard;
