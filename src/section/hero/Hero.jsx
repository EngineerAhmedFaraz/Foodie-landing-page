import React from "react";
import heroImg1 from "../../assets/images/pic1.png";
import heroImg2 from "../../assets/images/s-2.png";
import heroImg3 from "../../assets/images/s-3.png";

const Hero = () => {
  const url1 =
    "https://img.freepik.com/free-vector/banner-fast-food-with-hamburger-premium-quality_24877-58002.jpg?w=740&t=st=1696790961~exp=1696791561~hmac=72f35b49790624d863ac80748d8910fb2ba8dcaedf005c3aeae1e90e13127c66";
  const url =
    "https://img.freepik.com/free-photo/close-up-man-having-wholesome-sweet-meal_273609-36642.jpg?w=996&t=st=1696788334~exp=1696788934~hmac=0cb05ef5785075770c48f923794b4b2628d3a94ffa6ae9f5eb5feee643bd5354";
  const url2 =
    "https://img.freepik.com/premium-vector/people-with-food-word-burger-sandwich-soda-juice-vector-illustration_24911-61983.jpg?w=740";
  return (
    <>
      <div className="container pt-8">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-4">
          <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
            <img
              src={url}
              alt="burger/img"
              className="w-full h-full object-cover rounded-lg opacity-70"
            />
          </div>
          <div className="relative">
            <img
              src={url2}
              alt="img"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="relative">
            <img
              src={url1}
              alt="img"
              className="w-full h-full object-cover rounded-lg opacity-70"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
