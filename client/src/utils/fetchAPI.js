import axios from "axios";

let URL = "http://localhost:4000";

export const publicNewCar = async (priceReq, descriptionReq) => {
  let response = await axios.post(`${URL}/vehicle`, {
    headers: {
      "Content-Type": "application/json",
    },

    price: priceReq,
    description: descriptionReq,
  });
  const { image, price, description } = await response.data;

  return { image: URL + image, price, description };
};
