import { useState } from "react";


export default function Categoryrooms() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const categories = [
        { id: 1, name: "Rooms for Family", icon: "👪" },
        { id: 2, name: "Rooms for Boys", icon: "👦" },
        { id: 3, name: "Apartment", icon: "🏢" },
        { id: 4, name: "Rooms for Girls", icon: "👧" },
        { id: 5, name: "Luxury Rooms", icon: "🏰" },
        { id: 6, name: "Single Rooms", icon: "🛏️" },
        { id: 7, name: "Shared Rooms", icon: "🏠" },
        { id: 8, name: "Budget Rooms", icon: "💸" },
        // Add more categories as needed
      ];
      const ITEMS_PER_PAGE = 4;

      const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide
          ? categories.length - (categories.length % ITEMS_PER_PAGE || ITEMS_PER_PAGE)
          : currentIndex - ITEMS_PER_PAGE;
        setCurrentIndex(newIndex);
      };
    
      // Function to go to the next slide (next 4 items)
      const goToNext = () => {
        const isLastSlide = currentIndex + ITEMS_PER_PAGE >= categories.length;
        const newIndex = isLastSlide ? 0 : currentIndex + ITEMS_PER_PAGE;
        setCurrentIndex(newIndex);
      };

  return (
 <>
<div>
<div className="w-full flex flex-col items-center p-8 bg-white text-black">
      <div className="flex justify-between items-center w-full mb-6">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-9 h-1 bg-orange-500 "></div>
          <h2 className="text-5xl font-bold">Top Category Rooms</h2>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={goToPrevious}
            className="bg-black text-white p-2 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={goToNext}
            className="bg-black text-white p-2 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Show 4 items at a time */}
      <div className="flex md:space-x-32 space-x-2">
        {categories
          .slice(currentIndex, currentIndex + ITEMS_PER_PAGE)
          .map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <span className="text-4xl">{category.icon}</span>
              <span className="mt-2 md:text-lg text-sm text-center font-semibold">
                {category.name}
              </span>
            </div>
          ))}
      </div>
    </div>
</div>
 </>
  )
}
