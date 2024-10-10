import Card from "./Card";
import UploadForm from "./UploadForm";

function AdminPage() {
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
    <div className="">
      <h2 className="inter m-10 p-2 text-center text-2xl font-light">
        Panel de Administracion
      </h2>
      <UploadForm />
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
    </div>
  );
}

export default AdminPage;
