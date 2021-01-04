//Styles Imports
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

//Context Imports
import { NewCarProvider } from "./context/CreateNewCarContext";
import { StatusContextProvider } from "./context/StatusContext";

//Components Imports
import Form from "./components/form/Form";
import Header from "./components/Header";
import AlertMessage from "./components/AlertMessage";
import Image from "./components/Image";

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

const App = () => {
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
                <Form />
                <Image />
              </Grid>
            </div>
          </StatusContextProvider>
        </NewCarProvider>
      </div>
    </>
  );
};

export default App;
