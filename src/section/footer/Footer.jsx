import React, { useState } from "react";

const Footer = () => {
  const [curYear, setCurYear] = useState(new Date().getFullYear());
  return (
    <>
      <div className="border-t border-gray-300 mt-16">
        <div className="container text-center text-gray-500 py-4">
          Copyright &copy;{curYear} - Ahmed Faraz All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
