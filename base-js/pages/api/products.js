import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import handleCreateProduct from "../../controllers/products/create-product.controller";
import handleGetAllProducts from "../../controllers/products/get-all-products.controller";
import InvalidMethodError from "../../errors/request/InvalidMethodError";
import handleErrorResponse from "../../handlers/handleErrorResponse";

/** @type {import("next").NextApiHandler} */
const handler = async (req, res) => {
  // Do something with request
  switch (req.method) {
    case "GET":
      return await handleGetAllProducts(req, res);
    case "POST":
      return await handleCreateProduct(req, res);
    default:
      throw new InvalidMethodError(req.method);
  }
};

export default withApiAuthRequired(handleErrorResponse(handler));
