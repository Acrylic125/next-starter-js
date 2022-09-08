import getAllProducts from "../../services/products/get-all-products.service";
import * as yup from "yup";
import ParamError from "../../errors/data/ParamError";

const HandlerQuerySchema = yup.object().shape({
  limit: yup.number().integer().min(1).max(100).default(10),
  offset: yup.number().integer().min(0).default(0),
});

/** @type {import("next").NextApiHandler} */
const handler = async (req, res) => {
  const { limit, offset } = await HandlerQuerySchema.validate(req.query);

  const products = await getAllProducts();
  return res.status(200).json({
    data: products,
  });
};

export default handler;
