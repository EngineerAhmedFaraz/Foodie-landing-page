import React from "react";
import ProductCart from "../../components/cart/ProductCart";

const FeaturesFruit = () => {
  const data = [
    {
      id: 0,
      name: "Fresh Fruit",
      price: "$400",
      img: "https://img.freepik.com/free-photo/pollo-gastronomy-food-yummy-chicken_1350-59.jpg?w=996&t=st=1696789222~exp=1696789822~hmac=f3d0647ddf693bf9943d937dc3f0561d0c84243afc66eee3cf9e89b864978982",
    },
    {
      id: 1,
      name: "Fresh Vegs",
      price: "$550",
      img: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=996&t=st=1696789257~exp=1696789857~hmac=c4c91bd87aeb31264aabfae049126b68d9a53a2ec95df23bf35b1e300aab64f4",
    },
    {
      id: 2,
      name: "Canned Goods",
      price: "$600",
      img: "https://img.freepik.com/free-photo/pollo-gastronomy-food-yummy-chicken_1350-59.jpg?w=996&t=st=1696789222~exp=1696789822~hmac=f3d0647ddf693bf9943d937dc3f0561d0c84243afc66eee3cf9e89b864978982",
    },
    {
      id: 3,
      name: "Bread & Bakery",
      price: "$300",
      img: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?w=996&t=st=1696789257~exp=1696789857~hmac=c4c91bd87aeb31264aabfae049126b68d9a53a2ec95df23bf35b1e300aab64f4",
    },
  ];

  return (
    <>
      <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
          <div>
            <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
            <p className="text-gray-600 mt-2">
              Buy farm fresh fruits and vegetables online at the best prices
            </p>
          </div>
          <div className="space-x-4 ml-8 lg:mt-0">
            <button className="feature_btn">Fruits</button>
            <button className="text-gray-600 hover:text-green-500">
              Vegetables
            </button>
            <button className="text-gray-600 hover:text-green-500">
              Bread & Bakery
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
              alt="banner"
              className="w-ful h-full object-cover"
            />
          </div>
          {data.map((el) => (
            <ProductCart
              key={el.id}
              img={el.img}
              name={el.name}
              price={el.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesFruit;
