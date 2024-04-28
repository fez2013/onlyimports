import { query } from "@/lib/db";

export default async function handler(req, res){

    if (req.method == "GET") {
        const products = await query({
            query: `
                SELECT Inventory.Car_Name, Inventory.Year, Inventory.Mileage, Car_Variant.imageURL 
                FROM Inventory
                INNER JOIN Car_Variant ON Inventory.Car_ID = Car_Variant.Car_ID
            `,
             values:[],
        });

    res.status(200).json({ products: products})
    }
}