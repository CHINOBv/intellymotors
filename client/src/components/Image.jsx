import { useContext, useState } from "react";

//Styles Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

//Context
import PublicNewCarContext from "../context/CreateNewCarContext";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "auto",
    minHeight: 312,
    padding: "auto",
  },
  media: {
    height: 140,
    width: "100%",
  },
});

const Image = () => {
  const [openImage, setOpenImage] = useState(false);
  const { image } = useContext(PublicNewCarContext);

  const classes = useStyles();

  const handleClose = () => {
    setOpenImage(false);
  };

  return (
    <>
      {image.image ? (
        <Grid item md={8} xs>
          <Card className={classes.root}>
            <CardActionArea
              onClick={() => setOpenImage(!openImage ? true : false)}
            >
              <CardMedia
                className={classes.media}
                image={image.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Descripcion
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {image.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  component="samp"
                >
                  Precio ${image.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => setOpenImage(!openImage ? true : false)}
                startIcon={<VisibilityOutlinedIcon />}
              >
                Ver Imagen Completa
              </Button>
            </CardActions>
            <Dialog
              fullScreen
              open={openImage}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogContent>
                <a href={image.image} target="_blank" rel="noreferrer">
                  <img
                    src={image.image ? image.image : ''}
                    alt="fullview"
                    style={{ width: "100%" }}
                    source={{url: image.image}}
                  />
                </a>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  autoFocus
                  onClick={handleClose}
                  color="primary"
                >
                  Cerrar
                </Button>
              </DialogActions>
            </Dialog>
          </Card>
        </Grid>
      ) : null}
    </>
  );
};

export default Image;
