export async function getAllProducts() {
  const response = await fetch(`api/products`);
  const products = await response.json();
  return products;
}
