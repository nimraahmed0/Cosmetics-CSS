import React from 'react';

const cosmetics = () => {
  const Data = [
    { id: 1, name: 'foundation', price: 1200, description: 'Luxury watch', image: '/foundation.jpg' },
    { id: 2, name: 'Rice pulp mask', price: 800, description: 'Sporty design', image: '/mask.png' },
    { id: 3, name: 'j.perfume', price: 2500, description: 'Elegant timepiece', image: '/j.perfume.jpg' },
    { id: 4, name: 'Bundle Deal', price: 500, description: 'Sporty and stylish', image: '/skincare.jpg' },
    { id: 5, name: 'Krylon stick', price: 7000, description: 'Bold and rugged', image: '/paint.jpg' },
    { id: 6, name: 'Compact', price: 1000, description: 'Affordable and reliable', image: '/compact.jpg' },
  ];

  return (
    <div className="bg-red-400 grid grid-cols-1 md:grid-cols-3 gap-10 px-11 py-11 my-10">
      {Data.map(cosmetic => (
        <div key={cosmetic.id} className="watch-card bg-white p-5 rounded-md shadow-md text-center">
          <img src={cosmetic.image} alt={cosmetic.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
          <h3 className="mt-4 text-2xl font-bold">{cosmetic.name}</h3>
          <p className="text-gray-500">{cosmetic.description}</p>
          <div className="price text-blue-500 text-xl font-semibold mt-2">${cosmetic.price}</div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default cosmetics;