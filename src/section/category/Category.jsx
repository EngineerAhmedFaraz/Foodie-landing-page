import React from "react";
import CartCategory from "../../components/cart/CartCategory";

const Category = () => {
  const data = [
    {
      id: 1,
      name: "Fresh Fruit",
      count: "9 Products",
      img: "https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=996&t=st=1696789547~exp=1696790147~hmac=a8c7e64705375f35d9653fce44d7b0cabbc3edd7bc646e72c2092b655d54b969",
    },
    {
      id: 2,
      name: "Fresh Vegs",
      count: "9 Products",
      img: "https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?size=626&ext=jpg&ga=GA1.2.1480542331.1687200416&semt=ais",
    },
    {
      id: 3,
      name: "Canned Goods",
      count: "9 Products",
      img: "https://img.freepik.com/free-photo/two-cans-boiled-green-peas-vegetables-tablecloth-white-marble-table_114579-24363.jpg?size=626&ext=jpg&ga=GA1.1.1480542331.1687200416&semt=ais",
    },
    {
      id: 4,
      name: "Bread & Bakery",
      count: "9 Products",
      img: "https://img.freepik.com/free-photo/set-various-bread-stone-surface_114579-40612.jpg?size=626&ext=jpg&ga=GA1.1.1480542331.1687200416&semt=ais",
    },
    {
      id: 5,
      name: "Fresh Fruit",
      count: "9 Products",
      img: "https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?w=996&t=st=1696789547~exp=1696790147~hmac=a8c7e64705375f35d9653fce44d7b0cabbc3edd7bc646e72c2092b655d54b969",
    },
    {
      id: 6,
      name: "Fresh Vegs",
      count: "9 Products",
      img: "https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?size=626&ext=jpg&ga=GA1.2.1480542331.1687200416&semt=ais",
    },
    {
      id: 7,
      name: "Canned Goods",
      count: "9 Products",
      img: "https://img.freepik.com/free-photo/two-cans-boiled-green-peas-vegetables-tablecloth-white-marble-table_114579-24363.jpg?size=626&ext=jpg&ga=GA1.1.1480542331.1687200416&semt=ais",
    },
    {
      id: 8,
      name: "Bread & Bakery",
      count: "9 Products",
      img: "https://img.freepik.com/free-photo/set-various-bread-stone-surface_114579-40612.jpg?size=626&ext=jpg&ga=GA1.1.1480542331.1687200416&semt=ais",
    },
  ];

  return (
    <>
      <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <CartCategory
              key={item.id}
              img={item.img}
              name={item.name}
              count={item.count}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
