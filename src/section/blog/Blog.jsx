import React from "react";
import BlogCard from "../../components/cart/BlogCard";

const Blog = () => {
  const data = [
    {
      img: "https://img.freepik.com/free-photo/shah-plov-rice-garnish-with-seasonal-dry-fruits_114579-1949.jpg?size=626&ext=jpg&ga=GA1.1.1480542331.1687200416&semt=ais",
      title: "blog1",
      date: "Aug 10, 2023",
      comment: 6,
    },
    {
      img: "https://img.freepik.com/free-photo/shah-plov-rice-garnish-with-seasonal-dry-fruits_114579-1949.jpg?size=626&ext=jpg&ga=GA1.1.1480542331.1687200416&semt=ais",
      title: "blog2",
      date: "Aug 20, 2023",
      comment: 16,
    },
    {
      img: "https://img.freepik.com/free-photo/shah-plov-rice-garnish-with-seasonal-dry-fruits_114579-1949.jpg?size=626&ext=jpg&ga=GA1.1.1480542331.1687200416&semt=ais",
      title: "blog3",
      date: "Aug 30, 2023",
      comment: 36,
    },
  ];

  return (
    <>
      <div className="container pt-16">
        <h2 className="font-bold text-2xl">Latest News</h2>
        <p className="text-gray-500">
          Present posts in a best way to highlight interesting moments of your
          blog.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
          {data.map((e) => (
            <BlogCard
              key={e.date}
              img={e.img}
              tile={e.title}
              date={e.date}
              comment={e.comment}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
