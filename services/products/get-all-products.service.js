import pool from "../../db/db";

export default async function getAllProducts() {
  const [rows, fields] = await pool.query("SELECT * FROM product");
  console.log(rows);
  return rows;
  // return [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     price: 100,
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     price: 200,
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     price: 300,
  //   },
  //   {
  //     id: 4,
  //     name: "Product 4",
  //     price: 400,
  //   },
  //   {
  //     id: 5,
  //     name: "Product 5",
  //     price: 500,
  //   },
  // ];
}
