import React, { useEffect, useState } from 'react';

interface Product {
  Car_Name: string;
  Year: number;
  Mileage: number;
  imageURL: string; 
}

export default function getInventory() {
  const [products, setProducts] = useState<Product[]>([]);

  async function addProduct() {
    try {
      const postData = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/inventory`, postData);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const response = await res.json();
      setProducts(response.products); 
      console.log(response.products); 
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  }

  useEffect(() => {
    console.log("useEffect triggered");
    addProduct();
  }, []);

  return (
    <div>
      <style>
        {`
          .inventory-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
          }
          .inventory-item {
            text-align: center;
          }
          .inventory-item img {
            width: 100%; // Adjust as necessary
            height: auto;
            max-height: 200px; // Optional: limit the image height
          }
        `}
      </style>
      <h1>Inventory</h1>
      <ul className="inventory-grid">
        {products.map((product, index) => (
          <li key={index} className="inventory-item">
            <img src={product.imageURL} alt={`Image of ${product.Car_Name}`} />
            <div>{product.Year} - {product.Car_Name} - {product.Mileage.toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
