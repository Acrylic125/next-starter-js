import pool from "../db/db";
import { Product } from "../interfaces/product";

/**
 *
 * @param {{
 * name: string,
 * price: number
 * quantity: number,
 * seller_id: string
 * }} param0
 */
export async function createProduct({ name, price, quantity, seller_id }: Pick<Product, "name" | "price" | "quantity" | "seller_id">) {
  const [rows, fields] = await pool.query(
    "INSERT INTO products (name, price, quantity, seller_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)",
    [name, price, quantity, seller_id, new Date(), new Date()]
  );
  return rows;
}

export async function getAllProducts() {
  const [rows, fields] = await pool.query("SELECT * FROM products");
  return rows;
}
