import React from "react";

const FeatureSide = () => {
  return (
    <>
      <div className="w-1/2  h-full chair m-3 relative ">
        <div className="lg:absolute top-5 left-5 lg:text-3xl text-xl lg:p-0 p-5 poppins-medium">
          <div className="">
            Fay Bar <br /> Chair
          </div>
          <div className="lg:text-2xl text-">&#x20B9; 8,600</div>
        </div>
        <div className="lg:absolute bottom-0 right-0">
          <img src="/ProductImg/chair.png" alt="" />
        </div>
      </div>
      <div className="w-1/2  h-full chair m-3  relative">
        <div className="lg:absolute lg:top-5 left-5 lg:text-3xl text-xl lg:p-0 p-5 poppins-medium">
          <div>
            Glass <br />
            Vase{" "}
          </div>
          <div className="lg:text-2xl text-">&#x20B9; 4,200</div>
        </div>{" "}
        <div className="absolute bottom-0 lg:pl-5 mr-2">
          <img src="/ProductImg/glass.png" className="transform lg:scale-100 scale-125 lg:mb-0 mb-12" alt="" />
        </div>
      </div>
    </>
  );
};

export default FeatureSide;
