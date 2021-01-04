//Core Imports
import React from "react";

//Styles Imports
import { AppBar, Toolbar, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  barStyle: {
    backgroundColor: "#318dc3",
    width: "100%",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.barStyle}>
      <Toolbar>
        <Link href="/">
          <img
            src="https://app.intelimotor.com/logo.png"
            alt="logo"
            style={{ width: "150px" }}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
