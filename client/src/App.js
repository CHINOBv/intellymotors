import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import Form from "./components/Form";
import Header from "./components/Header";

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
    <Router>
      <div className={classes.ctn}>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Form />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
