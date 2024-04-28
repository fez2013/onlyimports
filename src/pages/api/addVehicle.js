import { query } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const products = await query({
        query: "SELECT * FROM Inventory",
        values: [],
      });
      res.status(200).json({ products: products });
    } catch (error) {
      console.error('Error fetching products:', error.message);
      res.status(500).json({ error: 'Failed to fetch products. Please try again.' });
    }
  } else if (req.method === 'POST') {
    const { Car_ID, Manufacturer_ID, Car_Name, Year, Engine_Type, Fuel_Type, Mileage } = req.body;
    try {
      await query({
        query: 'INSERT INTO Inventory (Car_ID, Manufacturer_ID, Car_Name, Year, Engine_Type, Fuel_Type, Mileage) VALUES (?, ?, ?, ?, ?, ?, ?)',
        values: [Car_ID, Manufacturer_ID, Car_Name, Year, Engine_Type, Fuel_Type, Mileage],
      });
      res.status(200).json({ message: 'Vehicle added successfully!' });
    } catch (error) {
      console.error('Error adding vehicle:', error.message);
      res.status(500).json({ error: 'Failed to add vehicle. Please try again.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
