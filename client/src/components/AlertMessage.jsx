//Core Imports
import { useContext } from "react";

//Styles Imports
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { IconButton, Collapse } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

//Context Imports
import AlertContext from "../context/StatusContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    minWidth: 300,
    padding: "15px auto",
    margin: "auto",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  alert: {
    marginTop: "10px",
    marginBottom: "10px",
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
          icon={
            alertInfo.typeAlert === "error" ? (
              <ErrorOutlineOutlinedIcon />
            ) : (
              <CheckCircleOutlineOutlinedIcon />
            )
          }
          className={classes.alert}
          variant="filled"
          color={alertInfo.typeAlert ? alertInfo.typeAlert : "success"}
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
