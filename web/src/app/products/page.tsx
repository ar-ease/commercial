"use client";
//import altCard1 from "@/components/altCard1";
import ProductCard from "@/components/productCard";

import { useEffect, useState } from "react";
import axios from "axios";

// Define the Product type based on the API response
interface Product {
  id: string;
  name: string;
  image: string;
  description: string | null;
  productType: string;
  available: string;
  createdAt: string;
  updatedAt: string;
}

// Define the API response type
interface ApiResponse {
  products: Product[];
  count: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]); // State for products
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ApiResponse>("/api/products");
        console.log("API Response:", response.data); // Log the entire response
        setProducts(response.data.products); // Extract the products array
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts(); // Call the async function
  }, []); // Empty dependency array ensures it runs only once

  // If there was an error fetching data, display it
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="">
      <h1>Products</h1>

      <div className=" pl-10  md:pl-7 lg:pl-0  max-w-7xl mx-auto p-8 gap-8  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index}>
            <ProductCard
              name={`Product ${index + 1}`}
              productType="PAPER"
              available="INSTOCK"
              description={`this is the description of the product`}
            />
          </div>
        ))}
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>
              <strong>Name:</strong> {product.name}
            </p>
            <p>
              <strong>Type:</strong> {product.productType}
            </p>
            <p>
              <strong>Availability:</strong> {product.available}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(product.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
