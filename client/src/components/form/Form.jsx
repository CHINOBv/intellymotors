//Core Imports
import { useContext } from "react";

//Styles Imports
import {
  Avatar,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import { makeStyles } from "@material-ui/core/styles";

//Context Imports
import PublicNewCarContext from "../../context/CreateNewCarContext";
import AlertContext from "../../context/StatusContext";

//Components Imports
import PublicButton from "./PublicButton";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#318dc3",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  price: {
    textAlign: "center",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 3,
    height: "auto",
    minHeight: 312,
  },
}));

const Form = () => {
  const { price, setPrice, description, setDescription } = useContext(
    PublicNewCarContext
  );
  const { isLoading } = useContext(AlertContext);

  const classes = useStyles();
  return (
    <Grid item md={4} sm>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <DriveEtaOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Publica Tu Auto
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.price}
              id="price"
              label="Precio"
              type="number"
              fullWidth
              autoFocus
              variant="filled"
              margin="normal"
              placeholder="40000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              disabled={isLoading}
            />
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              label="Agrega tu Descripcion"
              placeholder="Nuevo, en Excelente Estado..."
              multiline
              variant="filled"
              fullWidth
              margin="normal"
              disabled={isLoading}
            />

            <PublicButton />
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default Form;
