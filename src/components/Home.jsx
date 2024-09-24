import Card from "./Card";
import Carousel from "./Carousel";
import Pagination from "./Pagination";
import Footer from "./Footer";
import Newsletters from "./Newsletters";
import OfferButton from "./OfferButton";

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
      <hr className="mx-auto my-10 w-96 border-2" />
      <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:m-10 xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            id={product.id}
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
      <Footer />
    </>
  );
}
