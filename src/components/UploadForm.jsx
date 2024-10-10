import { useState } from "react";
import { storage } from "../firebase.jsx";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UploadForm = () => {
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

    const image1URL = await uploadImage(formData.image1);
    const image2URL = await uploadImage(formData.image2);

    const productData = {
      name: formData.name,
      description: formData.description,
      category: formData.category,
      price: parseFloat(formData.price),
      imageUrl1: image1URL,
      imageUrl2: image2URL,
    };

    fetch("http://localhost:8080/api/v1/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Product created:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md rounded-lg border border-gray-600 p-4 shadow-lg"
    >
      <h2 className="mb-4 text-xl font-bold">Upload New Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded border border-gray-400 p-2"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded border border-gray-400 p-2"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded border border-gray-400 p-2"
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
        className="mb-4 w-full rounded border border-gray-400 p-2"
      />
      <input
        type="number"
        name="stars"
        placeholder="Stars"
        step="0.1"
        value={formData.stars}
        onChange={handleChange}
        required
        className="mb-4 w-full rounded border border-gray-400 p-2"
      />

      <input
        type="file"
        name="image1"
        accept="image/*"
        onChange={handleChange}
        required
        className="mb-4"
      />
      <input
        type="file"
        name="image2"
        accept="image/*"
        onChange={handleChange}
        required
        className="mb-4"
      />

      <button
        type="submit"
        className="w-full rounded bg-blue-500 p-2 text-white transition duration-200 hover:bg-blue-600"
      >
        Upload Product
      </button>
    </form>
  );
};

export default UploadForm;
