import Card from "./Card";
import Carousel from "./Carousel";
import Pagination from "./Pagination";
import Newsletters from "./Newsletters";
import OfferButton from "./OfferButton";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);
  const handlePage = (newPage) => {
    setPage(newPage);
  };
  const fetchProduct = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/products?page=${page}&limit=8`,
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
  }, [page]);

  return (
    <>
      <h1 className="mx-auto my-16 w-[900px] scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Your Best <span className="text-yellow-900"> Comics Shop</span>
      </h1>
      <Carousel />
      <hr className="mx-auto my-10 w-96 border-2" />
      <h2 className="scroll-m-20 text-center text-3xl font-extralight first:mt-0">
        All Products
      </h2>
      <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:m-10 xl:grid-cols-3 2xl:grid-cols-4">
        {!products
          ? [...Array(8)].map((_, i) => (
              <div
                className="h-64 w-96 animate-pulse rounded-xl border-4 bg-white"
                key={i}
              >
                <div className="m-5 h-12 w-28 rounded-xl bg-gray-300"></div>
                <div className="mx-5 my-2 h-6 w-24 rounded-xl bg-gray-300"></div>
                <div className="mx-5 my-2 h-6 w-16 rounded-xl bg-gray-300"></div>
              </div>
            ))
          : products.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                price={product.price}
                id={product.id}
                img={product.imageUrl1}
                isAdmin={false}
              />
            ))}
        {/* {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            id={product.id}
            img={product.imageUrl1}
            isAdmin={false}
          />
        ))} */}
      </div>
      <hr className="mx-auto my-10 w-96 border-2" />
      <div className="mx-10 justify-around md:flex">
        <div className="flex flex-1 justify-center md:ml-44">
          <Pagination changePage={handlePage} page={page} />
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
