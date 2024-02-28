import React from "react";
import { Link } from "react-router-dom";

const Price = () => {
  return (
    <div className="text-med relative border-0 leading-1vw text-[#0c527b] hover:text-black font-[500]  transition-colors duration-150 ease-linear">
      <Link to="/pricing">Pricing</Link>
    </div>
  );
};

export default Price;
