import React from "react";

const TopSelling = () => {
  return (
    <>
      <div className="border-b">
        <div
          className="lg:text-start text-center lg:mt-0 mt-5 text-3xl ml-3 mb-2"
          style={{ fontFamily: "Open Sans" }}
        >
          Top Selling Products
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-8 mx-8 my-4">
        <div
          className="basis-1/4 rounded-xl relative h-56"
          style={{ background: "#f2f2f7" }}
        >
          <div className="">
            <div className="lg:absolute top-8 left-5 text-2xl poppins-medium lg:p-0 p-5">
              <div>Visconti Chair </div>
              <div>&#x20B9; 8600</div>
            </div>{" "}
          </div>
          <div className="lg:absolute bottom-0 right-0 flex justify-end">
            <img
              src="ProductImg/topSelling (3).png"
              alt="topSelling"
              className="rounded-b-xl transform lg:scale-100 scale-125 lg:mb-0 mb-7 lg:ml-0 mr-7"
            />
          </div>
        </div>
        <div
          className="basis-1/4 rounded-xl lg:relative h-56"
          style={{ background: "#f2f2f7" }}
        >
          <div className="">
            <div className="lg:absolute top-8 left-5 text-2xl poppins-medium lg:p-0 p-5">
              <div>Ceramic Vase </div>
              <div>&#x20B9; 2600</div>
            </div>{" "}
          </div>
          <div className="lg:absolute bottom-0 right-0 flex justify-end">
            <img
              src="ProductImg/topSelling (2).png"
              alt="topSelling"
              className="rounded-b-xl transform lg:scale-100 scale-125 lg:mb-0 mb-7 lg:ml-0 mr-7"
            />
          </div>
        </div>
        <div
          className="basis-1/2 rounded-xl lg:relative h-56"
          style={{ background: "#f2f2f7" }}
        >
          <div className="">
            <div className="lg:absolute top-8 left-5 text-2xl poppins-medium lg:p-0 p-5">
              <div>Betty Sofa </div>
              <div className="text-base">HOME , OFFICE</div>

              <div className="lg:mt-16 mt-5">&#x20B9; 11,000</div>
            </div>{" "}
          </div>
          <div className="lg:absolute bottom-0 right-0 flex justify-end">
            <img
              src="ProductImg/topSelling (1).png"
              alt="topSelling"
              className="rounded-b-xl transform lg:scale-100 scale-125 lg:mb-0 mb-7 lg:ml-0 mr-7"
            />
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default TopSelling;
