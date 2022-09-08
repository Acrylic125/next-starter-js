import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { Suspense } from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../../api/products-api";

export default function Products({ user }) {
  const products = useQuery(["products"], getAllProducts);

  return (
    <div>
      <h1>Products</h1>
      <p>Here are all the products</p>
      <ul>
        {products.data?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
