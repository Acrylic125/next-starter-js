import * as yup from "yup";
import { extractManyDataResponse } from "../utils/api-utils";

const ProductSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
});

export async function getAllProducts() {
  const response = await fetch(`api/products`);
  const extractedData = await extractManyDataResponse(response);

  return extractedData.map((product) => ProductSchema.cast(product));
}
