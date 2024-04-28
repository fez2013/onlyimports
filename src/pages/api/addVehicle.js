import { query } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { manufacturerId, name, year, engineType, fuelType, mileage } = req.body;
    try {
      await query({
        query: 'INSERT INTO Inventory (ManufacturerID, Name, Year, EngineType, FuelType, Mileage) VALUES (?, ?, ?, ?, ?, ?)',
        values: [manufacturerId, name, year, engineType, fuelType, mileage],
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
