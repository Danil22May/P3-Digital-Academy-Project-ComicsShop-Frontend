const API_URL = "http://localhost:8080/api/v1/product";

export const createProduct = async (productData, httpMethod) => {
  const response = await fetch(API_URL, {
    method: httpMethod,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  return response.json();
};
