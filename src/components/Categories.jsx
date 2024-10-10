import { useState, useEffect } from "react";
import Card from "./Card";
export default function Categories() {
  const [products, setProducts] = useState(null);
  const fetchProduct = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/products?page=0&limit=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const newProduct = await response.json();
    setProducts(newProduct.content);
    console.log(products);
  };

  useEffect(() => {
    fetchProduct().then((result) => console.log(result));
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="m-16 text-center text-2xl font-light">Categories</h1>
      <hr className="mx-auto my-10 w-[1450px] border-2" />
      <div className="m-10 flex justify-center gap-10">
        <div className="w-96 rounded-md border-4 border-gray-300 bg-white text-center hover:shadow-md">
          <img
            src="https://static.posters.cz/image/750/31869.jpg"
            alt="Marvel"
            className="h-60 w-96 rounded-md"
          />
          <h2 className="h-10 text-2xl font-bold">Marvel</h2>
        </div>
        <div className="w-96 rounded-md border-4 border-gray-300 bg-white text-center hover:shadow-md">
          <img
            src="https://www.academiataure.com/wp-content/uploads/2024/02/1366_2000.jpg"
            alt="Marvel"
            className="h-60 w-96 rounded-md"
          />
          <h2 className="h-10 text-2xl font-bold">Manga</h2>
        </div>
        <div className="w-96 rounded-md border-4 border-gray-300 bg-white text-center hover:shadow-md">
          <img
            src="https://sm.ign.com/t/ign_es/screenshot/default/blob_n6vk.1280.jpg"
            alt="Marvel"
            className="h-60 w-96 rounded-md"
          />
          <h2 className="h-10 text-2xl font-bold">DC</h2>
        </div>
      </div>
      <hr className="mx-auto my-10 w-[1450px] border-2" />

      <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:m-10 xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            id={product.id}
            img={product.imageUrl1}
          />
        ))}
      </div>
    </div>
  );
}
