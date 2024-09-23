/* eslint-disable react/prop-types */

import image from "./comics_batman.jpg";

export default function Card({ name, price }) {
  return (
    <div className="mt-3 bg-white border-4 border-gray-300 w-full md:w-96 h-auto md:h-64 rounded-2xl flex flex-col md:flex-row hover:shadow-md transition-shadow overflow-hidden">
      <div className="flex flex-col p-4 md:pt-4 md:px-6">
        <h1 className="font-semibold inter text-xl md:text-2xl">{name}</h1>
        <div className="italic text-xs md:text-sm mt-2">
          A 1990 comics about Batman
        </div>
        <h1 className="font-semibold inter text-xl md:text-2xl mt-4">
          {price} €
        </h1>
        <div className="flex justify-start md:justify-around mt-4 w-full md:w-40 gap-2 md:gap-1">
          <button className="border rounded-xl text-xs md:text-sm border-blue-400 p-2 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors">
            Add to Cart
          </button>
          <button className="border rounded-xl border-yellow-400 p-2 text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors">
            More
          </button>
        </div>
      </div>
      <img src={image} alt="image" className="h-40 object-cover md:h-auto" />
    </div>
  );
}
