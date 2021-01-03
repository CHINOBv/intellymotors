import { makeStyles } from "@material-ui/styles";

import { NewCarProvider } from "./context/CreateNewCarContext";
import { StatusContextProvider } from "./context/StatusContext";

import Form from "./components/form/Form";
import Header from "./components/Header";

import AlertMessage from "./components/AlertMessage";

const useStyles = makeStyles({
  ctn: {
    backgroundColor: "#222222",
    width: "100%",
    height: "100vh",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.ctn}>
        <Header />
        <NewCarProvider>
          <StatusContextProvider>
            <AlertMessage/>
            <Form />
          </StatusContextProvider>
        </NewCarProvider>
      </div>
    </>
  );
}

export default App;
