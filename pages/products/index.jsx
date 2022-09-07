import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";
import { useQuery } from "react-query";

export default function Products({ user }) {
  //   const products = useQuery(["products"],

  //   );

  console.log(user);
  return <div>Products</div>;
}

export const getServerSideProps = withPageAuthRequired();
