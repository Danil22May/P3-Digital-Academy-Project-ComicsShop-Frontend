import Card from "./Card";
import Carousel from "./Carousel";
import Pagination from "./Pagination";
import Newsletters from "./Newsletters";
import OfferButton from "./OfferButton";
import { useEffect, useState } from "react";

export default function Home() {
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
    <>
      <Carousel />
      <hr className="mx-auto my-10 w-96 border-2" />
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
      <hr className="mx-auto my-10 w-96 border-2" />
      <div className="mx-10 justify-around md:flex">
        <div className="flex flex-1 justify-center md:ml-44">
          <Pagination />
        </div>
        <div className="flex items-center justify-center gap-2">
          <OfferButton text={"NEW"} />
          <OfferButton text={"SALES"} />
        </div>
      </div>
      <div className="mx-10 my-5">
        <Newsletters />
      </div>
    </>
  );
}
