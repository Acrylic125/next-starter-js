export async function getAllProducts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products = await response.json();
  return products;
}
