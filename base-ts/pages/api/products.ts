import { handleCreateProduct } from "./../../controllers/products.controller";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { handleGetAllProducts } from "../../controllers/products.controller";
import hanleErrorResponse from "../../handlers/handleErrorResponse";
import InvalidMethodError from "../../errors/request/InvalidMethodError";
import type { NextApiHandler } from "next";

/** @type {import("next").NextApiHandler} */
const handler: NextApiHandler = async (req, res) => {
  // Do something with request
  switch (req.method) {
    case "GET":
      return await handleGetAllProducts(req, res);
    case "POST":
      return await handleCreateProduct(req, res);
    default:
      // We will presume the request method matches the accepted methods in InvalidMethodError.
      throw new InvalidMethodError(req.method as any);
  }
};

export default withApiAuthRequired(hanleErrorResponse(handler));
