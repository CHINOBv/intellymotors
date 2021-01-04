import { useContext, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import PublicNewCarContext from "../context/CreateNewCarContext";

import ModalImage from "./ModalImage";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: 140,
    width: "100%",
  },
});

const Image = () => {
  const [openImage, setOpenImage] = useState(false);

  const { image, description, price } = useContext(PublicNewCarContext);
  const classes = useStyles();

  return (
    <>
      {image ? (
        <Grid item md={8} xs>
          <Card className={classes.root}>
            <CardActionArea
              onClick={() => setOpenImage(!openImage ? true : false)}
            >
              <CardMedia
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Descripcion
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  component="samp"
                >
                  Precio ${price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => setOpenImage(!openImage ? true : false)}
              >
                Ver Imagen Completa
              </Button>
            </CardActions>
            <ModalImage
              setOpenImage={setOpenImage}
              openImage={openImage}
              image={image}
            />
          </Card>
        </Grid>
      ) : null}
    </>
  );
};

export default Image;
