import { useState, createContext } from "react";

const Context = createContext({});
export default Context;

export const StatusContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    message: "",
    typeAlert: "",
    title: "",
  });
  const [success, setSuccess] = useState(false);

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
        showAlert,
        setShowAlert,
        alertInfo,
        setAlertInfo,
        success,
        setSuccess,
      }}
    >
      {children}
    </Context.Provider>
  );
};
