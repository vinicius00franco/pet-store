import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("/mockData.json");
  return response.data.products;
};
