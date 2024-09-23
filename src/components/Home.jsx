import Card from "./Card";

export default function Home() {
  const products = [
    { id: 1, name: "Batman", price: 90 },
    { id: 2, name: "Spider-Man", price: 78 },
    { id: 3, name: "Spider-Man", price: 78 },
    { id: 4, name: "Spider-Man", price: 78 },
    { id: 5, name: "Spider-Man", price: 78 },
  ];
  return (
    <>
      <hr className="w-96 border-2 mx-auto my-10" />
      <div className="grid grid-cols-2 md:m-10 gap-2 md:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} name={product.name} price={product.price} />
        ))}
      </div>
      <hr className="w-96 border-2 mx-auto my-10" />
    </>
  );
}
