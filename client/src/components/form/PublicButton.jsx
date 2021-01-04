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

    if (showAlert) {
      setShowAlert(false);
      setAlertInfo({
        message: "",
        typeAlert: "",
        title: "",
      });
    }

    //Validate if all fields are filled
    if (price <= 0 || description.trim() === "") {
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

    setIsLoading(true);
    await publicNewCar(price, description)
      .then((response) => {
        setImage(response);

        setShowAlert(true);
        setAlertInfo({
          message: "Anuncio Publicado!",
          typeAlert: "success",
          title: "Ready",
        });
      })
      .catch((error) => {
        //Error Case
        setShowAlert(true);
        setAlertInfo({
          message: `Hemos tenido un error, porfavor intentalo otra vez ${error}`,
          typeAlert: "error",
          title: "Error",
        });
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => {
          setShowAlert(false);
          setAlertInfo({
            message: "",
            typeAlert: "",
            title: "",
          });
        }, 5000);
      });
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
