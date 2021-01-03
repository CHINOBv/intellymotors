import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Input,
} from "@material-ui/core";

import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#36b6ff",
  },
  price: {
    width: "50%",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 3,
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
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
          />
          <TextField
            id="description"
            label="Agrega tu Descripcion"
            placeholder="Nuevo, en Excelente Estado..."
            multiline
            variant="filled"
            fullWidth
            margin="normal"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<PublishOutlinedIcon/>}
            
          >
            Publicar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Form;
