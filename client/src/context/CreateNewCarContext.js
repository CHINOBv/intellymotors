import { useState, createContext } from "react";

const Context = createContext({});
export default Context;

export const NewCarProvider = ({ children }) => {
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Context.Provider
      value={{
        price,
        setPrice,
        description,
        setDescription,
        image,
        setImage,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
