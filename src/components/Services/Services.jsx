import React from "react";

const Services = () => {

  return (
    <>
      <div>
        <div
          className=" text-3xl pl-5 border-b my-2"
          style={{ fontFamily: "Open Sans" }}
        >
          Workspace Wonders
        </div>
        <div className="bg-gradient-to-r from-indigo-500/40 from-20% via-sky-400/70 via-40% to-emerald-300/70 to-80% p-10 mx-10 my-5 rounded-xl flex">
          <div className="min-w-[700px]">
            <img
              src="./ProductImg/pexels-pixabay-260931.jpg"
              id="yourImageId"
              className="w-[700px] h-96 rounded-xl hover:transform hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
              alt=""
            />
          </div>
          <div>
            <div className="text-4xl font-semibold poppins-medium ml-10 text-balance mb-4">
              Your Ultimate Destination for Customized Office Furniture,
              Services, and Architectural Elegance.
            </div>
            <div className="text-base poppins-medium ml-10 text-balance text-gray-800">
              Elevate your workspace with bespoke solutions at our furniture
              haven – where office functionality meets personalized design and
              architectural finesse. Unleash the art of productivity with our
              tailored office furniture services.
            </div>
            <div className="mt-10 flex justify-end">
              {" "}
              <button className="bg-white hover:bg-slate-300 lg:px-5 px-6 lg:text-base text-xs rounded-full poppins-medium py-2">
                learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div
          className=" text-3xl pl-5 border-b my-2"
          style={{ fontFamily: "Open Sans" }}
        >
          Bulk Orders
        </div>
        <div className="bg-gradient-to-r from-lime-300/40 from-20% via-fuchsia-500/40 via-40% to-rose-500/40 to-80% p-10 mx-10 my-5 rounded-xl flex">
          <div>
            <div className="text-4xl font-semibold poppins-medium mr-10 text-balance mb-4">
              Your Prime Hub for Bulk Orders: Customized Office Furniture,
              Comprehensive Services, and Architectural Elegance at Scale.
            </div>
            <div className="text-base poppins-medium mr-10 text-balance text-gray-800">
              Transform your workspace with tailored solutions at our furniture
              sanctuary, blending office functionality, personalized design, and
              architectural finesse. Ignite productivity with our bespoke office
              furniture services.
            </div>
            <div className="mt-10 flex justify-start">
              {" "}
              <button className="bg-white hover:bg-slate-300 lg:px-5 px-6 lg:text-base text-xs rounded-full poppins-medium py-2">
                Bulk Order
              </button>
            </div>
          </div>
          <div className="min-w-[700px]">
            <img
              src="./ProductImg/pexels-pixabay-416320.jpg"
              id="yourImageId2"
              className="w-[700px] h-96 rounded-xl hover:transform hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
