import { query } from "@/lib/db";

export default async function handler(req, res){

    if (req.method == "GET") {
        const products = await query({
            query:"SELECT * FROM Inventory",
             values:[],
        });

    res.status(200).json({ products: products})
    }
}