import Card from "./Card";
import Carousel from "./Carousel";
import Pagination from "./Pagination";
import Footer from "./Footer";

export default function Home() {
  const products = [
    { id: 1, name: "Batman", price: 90 },
    { id: 2, name: "Spider-Man", price: 78 },
    { id: 3, name: "Spider-Man", price: 78 },
    { id: 4, name: "Spider-Man", price: 78 },
    { id: 5, name: "Spider-Man", price: 78 },
    { id: 6, name: "Spider-Man", price: 78 },
    { id: 7, name: "Spider-Man", price: 78 },
    { id: 8, name: "Spider-Man", price: 78 },
  ];

  return (
    <>
      <Carousel />
      <hr className="w-96 border-2 mx-auto my-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 m-4 md:m-10">
        {products.map((product) => (
          <Card key={product.id} name={product.name} price={product.price} />
        ))}
      </div>
      <hr className="w-96 border-2 mx-auto my-10" />
      <div className="flex justify-center">
        <Pagination />
      </div>
      <Footer />
    </>
  );
}
