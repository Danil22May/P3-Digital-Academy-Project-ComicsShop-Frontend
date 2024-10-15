/* eslint-disable react/prop-types */

export default function Card({
  name,
  price,
  id,
  img,
  isAdmin,
  onEdit,
  onDelete,
}) {
  return (
    <div className="mt-3 flex h-auto w-full flex-col overflow-hidden rounded-2xl border-4 border-gray-300 bg-white transition-shadow hover:shadow-md md:h-64 md:w-96 md:flex-row">
      <div className="flex flex-col p-4 md:px-6 md:pt-4">
        <h1 className="inter text-xl font-semibold md:text-2xl">{name}</h1>
        <div className="mt-2 text-xs italic md:text-sm">
          A 1990 comics about Batman
        </div>
        <h1 className="inter mt-4 text-xl font-semibold md:text-2xl">
          {price}€
        </h1>
        <div className="mt-4 flex w-full justify-start gap-2 md:w-40 md:justify-around md:gap-1">
          {isAdmin ? (
            <>
              <button
                onClick={() => {
                  onDelete(id);
                }}
                className="rounded-xl border border-red-400 p-2 text-xs text-red-400 transition-colors hover:bg-red-400 hover:text-white md:text-sm"
              >
                Delete
              </button>
              <a
                onClick={() => onEdit(id)}
                className="pointer rounded-xl border border-green-400 p-2 text-green-400 transition-colors hover:bg-green-400 hover:text-white"
              >
                Edit
              </a>
            </>
          ) : (
            <>
              <button className="rounded-xl border border-blue-400 p-2 text-xs text-blue-400 transition-colors hover:bg-blue-400 hover:text-white md:text-sm">
                Add to Cart
              </button>
              <a
                href={"/product?id=" + id}
                className="pointer rounded-xl border border-yellow-400 p-2 text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-white"
              >
                More
              </a>
            </>
          )}
        </div>
      </div>
      <img src={img} alt="image" className="h-40 object-cover md:h-auto" />
    </div>
  );
}
