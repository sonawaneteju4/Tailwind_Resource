import React from "react";

const HeaderBoard = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col justify-between items-center px-4 border-b lg:pb-0 pb-2">
      <div className="lg:text-3xl text-xl my-5" style={{'fontFamily' :'Open Sans'}}>Discover Product</div>
      <div className="flex justify-between gap-x-4 text-xs poppins-semibold">
        <button className="bg-black text-white px-5 py-2 rounded-3xl border-gray-400">Best Seller</button>
        <button className=" text-black px-5 py-2 rounded-3xl border-gray-800 border hover:bg-black/5">New Product</button>
        <button className="text-black px-5 py-2 rounded-3xl border-gray-800 border hover:bg-black/5">Offers</button>
      </div>
    </div>
  );
};

export default HeaderBoard;


