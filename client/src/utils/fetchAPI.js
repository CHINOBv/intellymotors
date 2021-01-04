import axios from "axios";

let URL = "http://localhost:4000";

export const publicNewCar = async (priceReq, descriptionReq) => {
  return await axios
    .post(`${URL}/vehicle`, {
      headers: {
        "Content-Type": "application/json",
      },

      price: priceReq,
      description: descriptionReq,
    })
    .then((response) => {
      const { image, price, description } = response.data;
      return { image: URL + image, price, description };
    }).catch(err => Promise.reject(err))
};
