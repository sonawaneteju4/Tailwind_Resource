import React from "react";
import { FiUser } from "react-icons/fi";

const Img = () => {
  const GalleryObj = [
    {
      link: "https://i.ibb.co/y4Pff3Q/prod-1.jpg",
      userName: "John Peter",
      Review: "Stylish design, sturdy build, and comfortable. A perfect addition to any modern living space.",
      rating: 5,
    },
    {
      link: "https://i.ibb.co/Rb7ydSN/prod-2.jpg",
      userName: "Alice Smith",
      Review: "Impressive craftsmanship and excellent quality. I love the attention to detail.",
      rating: 4,
    },
    {
      link: "https://i.ibb.co/9wNNjwb/prod-3.jpg",
      userName: "Bob Johnson",
      Review: "Sleek and modern design. Fits perfectly with my existing furniture.",
      rating: 5,
    },
    {
      link: "https://i.ibb.co/6JhVRm7/prod-4.jpg",
      userName: "Emily Davis",
      Review: "Comfortable and practical. The color options are fantastic!",
      rating: 4,
    },
    {
      link: "https://i.ibb.co/PZd5F3G/prod-5.jpg",
      userName: "David Wilson",
      Review: "Great value for money. The product exceeded my expectations.",
      rating: 5,
    },
    {
      link: "https://i.ibb.co/mcwFbJP/prod-6.jpg",
      userName: "Sophia Brown",
      Review: "Elegant and durable. A perfect addition to my home decor.",
      rating: 4,
    },
    {
      link: "https://i.ibb.co/b7sy645/prod-7.jpg",
      userName: "Matthew Turner",
      Review: "Stylish and comfortable. I would highly recommend this product.",
      rating: 5,
    },
    {
      link: "https://i.ibb.co/RQW7jW8/prod-8.jpg",
      userName: "Olivia Harris",
      Review: "Modern and chic. The delivery was quick, and the product was well-packaged.",
      rating: 4,
    },
    {
      link: "https://i.ibb.co/LzL8R0x/prod-9.jpg",
      userName: "Daniel White",
      Review: "Simple yet sophisticated. I'm very pleased with my purchase.",
      rating: 5,
    },
    {
      link: "https://i.ibb.co/y4Pff3Q/prod-1.jpg",
      userName: "Ava Martin",
      Review: "Highly durable and easy to clean. Perfect for a busy household.",
      rating: 4,
    },
    {
      link: "https://i.ibb.co/Zgj22T1/prod-13.jpg",
      userName: "Ethan Clark",
      Review: "Beautiful design and excellent build quality. Worth every penny.",
      rating: 5,
    },
    {
      link: "https://i.ibb.co/kmJ4YzK/prod-14.jpg",
      userName: "Mia Rodriguez",
      Review: "Versatile and functional. The product exceeded my expectations.",
      rating: 4,
    },
    {
      link: "https://i.ibb.co/pyy6Ff1/prod-15.jpg",
      userName: "Liam Evans",
      Review: "Comfortable seating and stylish design. A great addition to my living room.",
      rating: 5,
    },
    {
      link: "https://i.ibb.co/tzVwHgZ/prod-16.jpg",
      userName: "Isabella Carter",
      Review: "Sturdy build and modern aesthetics. I'm very happy with my purchase.",
      rating: 4,
    },
    {
      link: "https://i.ibb.co/5vJr3rd/prod-10.jpg",
      userName: "James Smith",
      Review: "Excellent quality and attention to detail. The product stands out.",
      rating: 5,
    },
    {
      link: "https://i.ibb.co/WWSFYcL/prod-11.jpg",
      userName: "Ella Davis",
      Review: "Functional and stylish. It complements my interior design perfectly.",
      rating: 4,
    },
    {
      link: "https://i.ibb.co/zP4sdHZ/prod-21.jpg",
      userName: "Jackson Harris",
      Review: "Sleek and comfortable. I would recommend this to anyone looking for a quality product.",
      rating: 5,
    },
    {
      link: "https://i.ibb.co/WWSFYcL/prod-11.jpg",
      userName: "Aria Brown",
      Review: "Affordable and stylish. A great addition to any home.",
      rating: 4,
    },
    {
      link: "https://i.ibb.co/CVWCqtR/pexels-pixabay-260931.jpg",
      userName: "Logan Turner",
      Review: "Modern design with a touch of elegance. The product exceeded my expectations.",
      rating: 5,
    },
    {
      link: "https://i.ibb.co/cgsF6fD/pexels-pixabay-416320.jpg",
      userName: "Grace White",
      Review: "Durable and comfortable. A great investment for my home.",
      rating: 4,
    },
    {
      link: "https://i.ibb.co/FBhYH6T/pexels-pixabay-37347.jpg",
      userName: "Carter Miller",
      Review: "Elegant and functional. The product arrived on time and in perfect condition.",
      rating: 5,
    },
    {
      link: "https://i.ibb.co/N7ZtSgt/pexels-atbo-245240.jpg",
      userName: "Scarlett Wilson",
      Review: "Sturdy build and comfortable seating. I'm very satisfied with my purchase.",
      rating: 4,
    },
  ];
  



  return (
    <>
      {GalleryObj.map((item, index) => (
        <div key={index} className="my-2 relative">
          <img src={item.link} alt="" className="rounded-xl z-0 hover:animate-pulse" />
          <div className="absolute z-50 text-white hover:text-black bottom-0 p-2 w-full rounded-b-xl hover:backdrop-blur-sm hover:bg-white/60 ">
            <div className="flex items-center">
              <div className="border-2 inline-block p-2  rounded-full m-1">
                <FiUser />
              </div>
              <div>{item.userName}</div>
            </div>
            <div className="text-xs mx-3">{item.Review}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Img;
