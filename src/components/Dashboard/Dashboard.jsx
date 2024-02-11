import React from "react";
import HeaderBoard from './HeaderBoard'
import FeaturedProduct from './FeaturedProduct'
import TopSelling from './TopSelling'
const Dashboard = () => {
  return (
    <div>
      <HeaderBoard />
      <FeaturedProduct />
      <TopSelling />
    </div>
  );
};

export default Dashboard;
