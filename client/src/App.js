import { makeStyles } from "@material-ui/styles";

import { NewCarProvider } from "./context/CreateNewCarContext";
import { StatusContextProvider } from "./context/StatusContext";

import Form from "./components/form/Form";
import Header from "./components/Header";

import AlertMessage from "./components/AlertMessage";
import Image from "./components/Image";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    maxWidth: "100%",

    overflow: "hidden",
  },
  container: {
    padding: "15px",
    justifyContent: "start",
    justifyItems: "start",
    alignItems: "start",
    alignContent: "center",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Header />
        <NewCarProvider>
          <StatusContextProvider>
            <div className={classes.container}>
              <AlertMessage />
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="flex-start"
                alignContent="center"
                wrap="wrap"
              >
                <Grid item md={4} sm>
                  <Form />
                </Grid>
                <Image />
              </Grid>
            </div>
          </StatusContextProvider>
        </NewCarProvider>
      </div>
    </>
  );
}

export default App;
