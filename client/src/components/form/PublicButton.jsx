import { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import PublicNewCarContext from "../../context/CreateNewCarContext";
import AlertContext from "../../context/StatusContext";
import { publicNewCar } from "../../utils/fetchAPI";
import { Button } from "@material-ui/core";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "10px auto",
  },
  submit: {
    margin: "10px auto",
    backgroundColor: "#36b6ff",
  },
}));

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

    if (!price && !description) return;

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
    if (!response.data) {
    }
    setImage(response.data.image);
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
