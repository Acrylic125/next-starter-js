import { getSession } from "@auth0/nextjs-auth0";
import * as yup from "yup";
import ParamError from "../../errors/data/ParamError";
import createProduct from "../../services/products/create-product.service";

const HandlerBodySchema = yup.object().shape({
  name: yup.string().min(1).max(100).required(),
  price: yup.number().min(0).required(),
  quantity: yup.number().integer().min(1).required(),
});

/** @type {import("next").NextApiHandler} */
const handleCreateProduct = async (req, res) => {
  const { name, price, quantity } = await HandlerBodySchema.validate(req.body);
  const session = getSession(req, res);

  if (!session) {
    throw new ParamError("You must be logged in to create a product");
  }

  const sellerId = session.user.sub;

  const products = await createProduct({ name, price, quantity, sellerId });
  return res.status(201).json({
    data: products,
  });
};

export default handleCreateProduct;
