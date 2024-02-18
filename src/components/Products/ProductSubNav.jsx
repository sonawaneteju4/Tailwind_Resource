import React, { useState } from "react";

const ProductSubNav = () => {
  const furnitureArray = [
    {
      category: "All",
      items: [null], // Intentionally left empty as "All" should encompass all other categories
    },
    {
      category: "Seating",
      items: [
        "Chair",
        "Sofa",
        "Ottoman",
        "Loveseat",
        "Bench",
        "Bar Stool",
        "Beanbag Chair",
        "Rocking Chair",
        "Futon",
        "Chaise Lounge",
      ],
    },
    {
      category: "Tables",
      items: [
        "Table",
        "Coffee Table",
        "Side Table",
        "Console Table",
        "End Table",
        "Dining Table",
        "Work Table",
        "Nightstand",
        "Bar Cart",
        "Folding Table",
        "Nest of Tables",
      ],
    },
    {
      category: "Beds",
      items: [
        "Bed",
        "Platform Bed",
        "Bunk Bed",
        "Daybed",
        "Canopy Bed",
        "Murphy Bed",
        "Crib",
        "Toddler Bed",
      ],
    },
    {
      category: "Storage",
      items: [
        "Storage", // Generic placeholder, consider sub-categories like:
        "Dresser",
        "Chest of Drawers",
        "Bookcase",
        "Shelf",
        "Cabinet",
        "Closet Organizer",
        "Pantry Cabinet",
        "Toy Chest",
        "Laundry Hamper",
        "Shoe Rack",
      ],
    },
    {
      category: "Dining Table",
      items: [
        "Storage Bench", // Specific item related to Dining Table category
        "China Cabinet",
        "Buffet",
        "Sideboard",
      ],
    },
    {
      category: "Work Table",
      items: [
        "Desk",
        "Filing Cabinet",
        "Bookshelf",
        "Desk Organizer",
        "Whiteboard",
        "Corkboard",
        "Printer Stand",
        "Drafting Table",
        "Craft Table",
      ],
    },
    {
      category: "Decor",
      items: [
        "Decor", // Generic placeholder, consider sub-categories like:
        "Artwork",
        "Mirror",
        "Rug",
        "Lamp",
        "Plant",
        "Throw Pillow",
        "Sculpture",
        "Vase",
        "Candle",
        "Picture Frame",
      ],
    },
    {
      category: "Outdoor",
      items: [
        "Patio Furniture",
        "Seating (chairs, benches, swings)",
        "Table",
        "Umbrella",
        "Gazebo",
        "Fire Pit",
        "Outdoor Rug",
        "Garden Tool",
        "Statue",
      ],
    },
  ];
  return (
    <>
      <ul className="w-full m-3 flex gap-4 justify-end pr-4 poppins-regular ">
        {furnitureArray.map(({ category, items }) => (
          <div className="dropdown">
            <li className="dropbtn poppins-regular hover:text-sky-500 cursor-pointer hover:border-b-2 border-b-2 border-transparent hover:border-sky-500 mr-2">
              {category}
            </li>
            {items.length > 0 && (
              <div className="dropdown-content">
                {items &&
                  items.map((item) => (
                    <li className="hover:text-sky-500 px-4" key={item}>
                      {item}
                    </li>
                  ))}
              </div>
            )}
          </div>
        ))}
      </ul>
    </>
  );
};

export default ProductSubNav;
