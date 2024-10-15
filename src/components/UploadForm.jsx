/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { storage } from "../firebase.jsx";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UploadForm = ({ productId }) => {
  const [created, setCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stars: "",
    image1: null,
    image2: null,
  });

  const categories = ["DC", "MARVEL", "MANGA"];

  useEffect(() => {
    if (productId) {
      fetch(`http://localhost:8080/api/v1/product?id=${productId}`)
        .then((response) => response.json())
        .then((product) => {
          setFormData({
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            stars: product.stars,
            image1: null,
            image2: null,
          });
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("image")) {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    let image1URL = formData.image1 ? await uploadImage(formData.image1) : null;
    let image2URL = formData.image2 ? await uploadImage(formData.image2) : null;

    const productData = {
      name: formData.name,
      description: formData.description,
      category: formData.category,
      stars: formData.stars,
      price: parseFloat(formData.price),
      imageUrl1: image1URL || "undefined",
      imageUrl2: image2URL || undefined,
    };

    const method = productId ? "PUT" : "POST";
    const url = productId
      ? `http://localhost:8080/api/v1/product?id=${productId}`
      : "http://localhost:8080/api/v1/product";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(productId ? "Product updated:" : "Product created:", data);
        setIsLoading(false);
        setCreated(true);
        setTimeout(() => {
          setCreated(false);
        }, 5000);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md rounded-lg border border-gray-300 bg-white p-4 text-gray-700 shadow-lg"
    >
      <h2 className="inter mb-4 text-xl font-bold text-gray-600">
        {productId ? "Edit Product" : "Add Product"}
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded border border-gray-300 p-2"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded border border-gray-300 p-2"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded border border-gray-300 p-2 text-gray-400"
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded border border-gray-300 p-2"
      />
      <input
        type="number"
        name="stars"
        placeholder="Stars"
        step="0.1"
        max="5.0"
        value={formData.stars}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded border border-gray-300 p-2"
      />

      <input
        type="file"
        name="image1"
        accept="image/*"
        onChange={handleChange}
        className="mb-4"
      />
      <input
        type="file"
        name="image2"
        accept="image/*"
        onChange={handleChange}
        className="mb-4 border-gray-300"
      />

      <button
        type="submit"
        className="my-2 rounded bg-blue-400 p-2 text-white transition duration-200 hover:bg-blue-600"
      >
        {productId ? "Update Product" : "Upload Product"}
      </button>
      {created ? (
        <h1 className="p-7 text-center text-2xl font-semibold text-green-600">
          {productId ? "Product updated" : "Product created"}
        </h1>
      ) : null}
      {isLoading ? (
        <h1 className="p-7 text-center text-2xl font-semibold text-yellow-600">
          Loading . . .
        </h1>
      ) : null}
    </form>
  );
};

export default UploadForm;
