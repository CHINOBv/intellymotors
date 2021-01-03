import React from "react";
import { AppBar, Toolbar, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
//import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";

const useStyles = makeStyles({
  barStyle: {
    backgroundColor: "#318dc3",
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
