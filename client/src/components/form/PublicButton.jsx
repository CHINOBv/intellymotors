//Core Imports
import { useContext } from "react";

//Styles Imports
import { makeStyles } from "@material-ui/core/styles";
import { Button, CircularProgress } from "@material-ui/core";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";

//Context Imports
import PublicNewCarContext from "../../context/CreateNewCarContext";
import AlertContext from "../../context/StatusContext";

//Utils Imports
import { publicNewCar } from "../../utils/fetchAPI";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "10px auto",
  },
  submit: {
    margin: "10px auto",
    backgroundColor: "#36b6ff",
  },
});

const PublicButton = () => {
  const classes = useStyles();

  const { price, description, setImage } = useContext(PublicNewCarContext);
  const {
    showAlert,
    setAlertInfo,
    setShowAlert,
    isLoading,
    setIsLoading,
  } = useContext(AlertContext);

  const fetchAPI = async (e) => {
    e.preventDefault();

    //Validate if all fields are filled
    if (price <= 0 && description.trim() === "") {
      setShowAlert(true);
      setAlertInfo({
        message: "Todos los campos son Requeridos",
        typeAlert: "error",
        title: "Error",
      });
      setTimeout(() => {
        setShowAlert(false);
        setAlertInfo({
          message: "",
          typeAlert: "",
          title: "",
        });
      }, 5000);
      return;
    }

    if (showAlert) {
      setShowAlert(false);
      setAlertInfo({
        message: "",
        typeAlert: "",
        title: "",
      });
    }

    setIsLoading(true);
    const response = await publicNewCar(price, description);

    //Case of Error
    if (!response) {
      setShowAlert(true);
      setAlertInfo({
        message: "Hemos tenido un error, porfavor intentalo otra vez",
        typeAlert: "error",
        title: "Error",
      });
      setTimeout(() => {
        setShowAlert(false);
        setAlertInfo({
          message: "",
          typeAlert: "",
          title: "",
        });
      }, 5000);
      return;
    }

    console.log(response)
    setImage(response);
    setIsLoading(false);
    setShowAlert(true);
    setAlertInfo({
      message: "Anuncio Publicado!",
      typeAlert: "success",
      title: "Ready",
    });

    setTimeout(() => {
      setShowAlert(false);
      setAlertInfo({
        message: "",
        typeAlert: "",
        title: "",
      });
    }, 5000);
  };

  return (
    <>
      {!isLoading ? (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          startIcon={<PublishOutlinedIcon />}
          onClick={(e) => fetchAPI(e)}
        >
          Publicar
        </Button>
      ) : (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default PublicButton;
