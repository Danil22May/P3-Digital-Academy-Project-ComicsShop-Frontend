import { useState } from "react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Batman: The Killing Joke",
    price: 19.99,
    description:
      "Batman: The Killing Joke es una novela gráfica de Batman escrita por Alan Moore e ilustrada por Brian Bolland. Publicada por DC Comics en 1988, la historia ha sido aclamada por la crítica por su profundidad psicológica y su controvertido tratamiento del Joker.",
    image: "/placeholder.svg?height=400&width=300",
    category: "DC Comics",
    stock: 50,
    rating: 4.8,
  };

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value) || 1));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // Implement actual add to cart logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="-mx-4 flex flex-col md:flex-row">
        <div className="mb-4 px-4 md:mb-0 md:flex-1">
          <div className="mb-4 rounded-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full rounded-lg object-cover md:h-80"
            />
          </div>
        </div>
        <div className="px-4 md:flex-1">
          <h2 className="mb-2 text-2xl font-bold">{product.name}</h2>
          <p className="mb-4 text-sm text-gray-600">{product.category}</p>
          <div className="mb-4 flex">
            <div className="mr-4">
              <span className="text-3xl font-bold text-indigo-600">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Disponibilidad:</span>
              <span className="ml-2 font-bold text-green-600">
                {product.stock > 0 ? "En stock" : "Agotado"}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-bold text-gray-700">Descripción:</span>
            <p className="mt-2 text-sm text-gray-600">{product.description}</p>
          </div>
          <div className="mb-4">
            <span className="font-bold text-gray-700">Valoración:</span>
            <div className="mt-2 flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">
                {product.rating.toFixed(1)}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <label htmlFor="quantity" className="mr-2 text-gray-700">
                Cantidad:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={product.stock}
                className="w-16 rounded-md border px-2 py-1"
              />
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
