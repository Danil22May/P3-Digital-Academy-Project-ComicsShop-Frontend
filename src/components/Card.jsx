/* eslint-disable react/prop-types */

import image from "./comics_batman.jpg";
export default function Card({ name, price }) {
  return (
    <div className="mt-3 border-4 w-64 md:w-96 h-64 rounded-2xl flex hover:shadow-md transition-shadow">
      <div className="flex flex-col pt-4 px-6">
        <h1 className="font-semibold inter text-2xl">{name}</h1>
        <div className="italic text-sm mt-2">A 1990 comics about batman</div>
        <h1 className="font-semibold inter text-2xl mt-4">{price} €</h1>
        <div className="md:flex md:justify-around mt-4 w-40 md:gap-1">
          <button className="border rounded-xl text-sm border-blue-400 p-2 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors">
            Add to Cart
          </button>
          <button className="border rounded-xl border-yellow-400 p-2 text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors">
            More
          </button>
        </div>
      </div>
      <img src={image} alt="image" className="shadow-lg rounded-lg" />
    </div>
  );
}
