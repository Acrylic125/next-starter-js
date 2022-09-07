import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../../api/products-api";

export default function Products({ user }) {
  const products = useQuery(["products"], getAllProducts);

  console.log(products);
  console.log(user);
  return <div>Products</div>;
}

export const getServerSideProps = withPageAuthRequired();
