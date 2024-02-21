import React from "react";

const Poster = () => {
  return (
    <>
      {" "}
      <div className="poster w-full flex items-center justify-between py-8 lg:m-3 mb-2">
        <div>
          <img src="/ProductImg/img.png" alt="sofa" />
        </div>
        <div className="text-center">
          <div className="lg:text-2xl text-base poppins-medium mb-5">
            Get UP TO <br />
            <span className="lg:text-5xl text-2xl">50% off</span>
          </div>
          <div>
            <button className="bg-white lg:px-5 px-6 lg:text-base text-xs rounded-full poppins-medium py-2">
              Get Discount
            </button>
          </div>
        </div>
        <div className="">
        <img className="" src="/ProductImg/‫img1.png" alt="sofa1" />
        </div>
      </div>
    </>
  );
};

export default Poster;
