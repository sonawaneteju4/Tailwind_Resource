import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SubHeader = () => {
  const [onMouseHover, setonMouseHover] = useState(false)
  const category = [
    {category : "All"},
    { category: "Seating", items: ["Chair", "Sofa"] },
    { category: "Tables", items: ["Tables", "Dining Table", "Work Table"] },
    { category: "Beds", items: ["Beds"] },
    { category: "Storage", items: ["Storage"] },
    { category: " Dining Table ", items: ["Storage"] },
    { category: "Work Table", items: ["Decore"] },
    { category: "Decor", items: ["Decore"] },
  ];
  return (
    <div className="p-4 flex justify-end border-b-2">
      {category.map((item) => (
        <NavLink to={item.category} onMouseEnter={() => {setonMouseHover(true)}} className="mr-5  poppins-regular hover:text-sky-500 cursor-pointer hover:border-b-2 hover:border-sky-500 border-b-2 border-transparent" key={item}>{item.category}</NavLink>
      ))}
    </div>
  );
};

export default SubHeader;
