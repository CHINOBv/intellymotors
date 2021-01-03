import { useContext } from "react";

import AlertContext from "../context/StatusContext";

import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    margin: "auto",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  alert: {
    marginTop: "10px",
  },
}));

const AlertMessage = () => {
  const { setShowAlert, showAlert, alertInfo, setAlertInfo } = useContext(
    AlertContext
  );
  const classes = useStyles();

  if (!showAlert) return null;

  return (
    <div className={classes.root}>
      <Collapse in={showAlert}>
        <Alert
          className={classes.alert}
          variant="filled"
          color={alertInfo.alertType}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowAlert(false);
                setAlertInfo({
                  message: "",
                  typeAlert: "",
                  title: "",
                });
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {alertInfo.message}
        </Alert>
      </Collapse>
    </div>
  );
};
export default AlertMessage;
