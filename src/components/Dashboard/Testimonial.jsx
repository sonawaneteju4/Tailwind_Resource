import React from "react";

const Testimonial = () => {
  return (
    <section>
      <div
        className="lg:text-3xl  text-xl px-3  border-b"
        style={{ fontFamily: "Open Sans" }}
      >
        Testimonial
      </div>
      <div className="flex justify-center mt-5">
        <div className="defBg m-5 p-5 rounded-xl relative">
          <div className="poppins-medium text-[10px] absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black text-white inline-block rounded-full p-4 hover:scale-110 cursor-pointer">
            WORK <br />
            <span className="text-fuchsia-400">SMART</span>
          </div>
          <div className="poppins-medium text-center text-xl mt-3 mb-1">
            WORK SMART
          </div>
          <div className="poppins-regular text-xs">
            Transform your workspace with [Furniture Shop]. Elevate your office
            aesthetics and functionality with our premium, customizable
            furniture solutions. With a commitment to quality, timely
            deliveries, and personalized service, we are your trusted partner
            for bulk office furniture orders.
          </div>
        </div>

        <div className="defBg m-5 p-5 rounded-xl relative">
          <div className="poppins-medium text-[15px] absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black text-white inline-block rounded-full p-5 hover:scale-110 cursor-pointer">
            GLS
          </div>
          <div className="poppins-medium text-center text-xl mt-3 mb-1">
            GLS
          </div>
          <div className="poppins-regular text-xs">
            Transform your workspace with [Furniture Shop]. Elevate your office
            aesthetics and functionality with our premium, customizable
            furniture solutions. With a commitment to quality, timely
            deliveries, and personalized service, we are your trusted partner
            for bulk office furniture orders.
          </div>
        </div>

        <div className="defBg m-5 p-5 rounded-xl relative">
          <div className="poppins-medium text-[11px] absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black text-white inline-block rounded-full p-4 px-5 hover:scale-110 cursor-pointer">
            Unity <br />
            <span className="text-fuchsia-400">Hub</span>
          </div>
          <div className="poppins-medium text-center text-xl mt-3 mb-1">
            Unity Hub
          </div>
          <div className="poppins-regular text-xs">
            Transform your workspace with [Furniture Shop]. Elevate your office
            aesthetics and functionality with our premium, customizable
            furniture solutions. With a commitment to quality, timely
            deliveries, and personalized service, we are your trusted partner
            for bulk office furniture orders.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
