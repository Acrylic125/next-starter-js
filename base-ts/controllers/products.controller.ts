import { getSession } from "@auth0/nextjs-auth0";
import type { NextApiHandler } from "next";
import * as yup from "yup";
import ParamError from "../errors/data/ParamError";
import { createProduct, getAllProducts } from "../services/products.service";

const HandlerBodySchema = yup.object().shape({
  name: yup.string().min(1).max(100).required(),
  price: yup.number().min(0).required(),
  quantity: yup.number().integer().min(1).required(),
});

/** @type {import("next").NextApiHandler} */
export const handleCreateProduct: NextApiHandler = async (req, res) => {
  try {
    const { name, price, quantity } = await HandlerBodySchema.validate(req.body);
    const session = getSession(req, res);

    if (!session) {
      throw new ParamError("You must be logged in to create a product");
    }

    const sellerId = session.user.sub;

    const products = await createProduct({ name, price, quantity, seller_id: sellerId });
    return res.status(201).json({
      data: products,
    });
  } catch (err) {
    throw err;
  }
};

const HandlerQuerySchema = yup.object().shape({
  limit: yup.number().integer().min(1).max(100).default(10),
  offset: yup.number().integer().min(0).default(0),
});

/** @type {import("next").NextApiHandler} */
export const handleGetAllProducts: NextApiHandler = async (req, res) => {
  const { limit, offset } = await HandlerQuerySchema.validate(req.query);

  const products = await getAllProducts();
  return res.status(200).json({
    data: products,
  });
};
