import axios from "axios";

let URL = "http://localhost:4000";

export const publicNewCar = async (price, description) => {
  let response = await axios.post(`${URL}/vehicle`, {
    headers: {
      "Content-Type": "application/json",
    },

    price: price,
    description: description,
  });
  return URL + response.data.image;
};
