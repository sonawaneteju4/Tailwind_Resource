import React, { useContext } from "react";
import HeaderBoard from './HeaderBoard'
import FeaturedProduct from './FeaturedProduct'
import TopSelling from './TopSelling'
import Testimonial from './Testimonial'
import AppContext from '../../context/AppContext'
const Dashboard = () => {
  return (
    <div>
      <HeaderBoard />
      <FeaturedProduct />
      <TopSelling />
      <Testimonial/>



    </div>
  );
};

export default Dashboard;
