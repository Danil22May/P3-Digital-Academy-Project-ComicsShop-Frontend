import { useEffect, useState } from "react";
import UploadForm from "./UploadForm";
import Card from "./Card";
import Pagination from "./Pagination";

function AdminPage() {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);
  const [editProduct, setEditProduct] = useState(null);

  const fetchProduct = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/products?page=${page}&limit=4`,
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
  };
  const handleDelete = (newId) => {
    fetch(`http://localhost:8080/api/v1/product?id=${newId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPage(0);
  };
  useEffect(() => {
    fetchProduct();
  }, [page]);
  const handlePage = (newPage) => {
    setPage(newPage);
  };
  const handleEdit = (newId) => {
    setEditProduct(newId);
  };

  if (!products) {
    return <div className="text-center text-2xl">Loading...</div>;
  }
  return (
    <div className="">
      <h2 className="inter m-10 p-2 text-center text-2xl font-light">
        Panel de Administracion
      </h2>
      <div className="flex">
        <div className="mx-24 my-10">
          <UploadForm productId={editProduct} />
        </div>
        <div className="m-4 grid w-[1200px] grid-cols-1 gap-1 sm:grid-cols-2 md:m-10 xl:grid-cols-2 2xl:grid-cols-2">
          {products.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              price={product.price}
              id={product.id}
              img={product.imageUrl1}
              isAdmin={true}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center md:ml-44">
        <Pagination changePage={handlePage} page={page} />
      </div>
    </div>
  );
}

export default AdminPage;
