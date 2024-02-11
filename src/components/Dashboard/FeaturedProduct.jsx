import React from "react";
import Poster from "./Poster";
import Poster2Sofa from "./Poster2Sofa";
import FeatureSide from "./FeatureSide";

const FeaturedProduct = () => {
  return (
    <div className="flex lg:flex-row  flex-col mb-3 ">
      <div className="lg:basis-1/2 basis-0 lg:m-2 m-5">
        <div>
          <Poster></Poster>
        </div>
        <div>
          <Poster2Sofa />
        </div>
      </div>
      <div className="lg:basis-1/2 basis-0 flex m-2 ">
          <FeatureSide/>
      </div>
    </div>
  );
};

export default FeaturedProduct;
