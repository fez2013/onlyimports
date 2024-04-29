import { query } from "@/lib/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const products = await query({
            query: `
                SELECT Inventory.Car_Name, Inventory.Year, Inventory.Mileage, Car_Variant.imageURL 
                FROM Inventory
                INNER JOIN Car_Variant ON Inventory.Car_ID = Car_Variant.Car_ID
            `,
            values: [],
        });
        res.status(200).json({ products: products });
    } else if (req.method === "POST") {
        const { customerID } = req.body;
        try {
            const result = await query({
                query: `INSERT INTO Customer (Customer_ID) VALUES (?)`,
                values: [customerID],
            });
            res.status(201).json({ message: 'Customer ID added successfully', result });
        } catch (error) {
            console.error('Database error:', error);
            res.status(500).json({ message: 'Error adding Customer ID', error: error instanceof Error ? error.message : 'Unknown error' });
        }
    }
}