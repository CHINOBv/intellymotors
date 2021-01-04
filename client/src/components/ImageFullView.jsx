//Styles Imports
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";

const ImageFullView = ({ setOpenImage, openImage, image }) => {
  const handleClose = () => {
    setOpenImage(false);
  };

  const download = (e) => {
    //    e.preventDefault();
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpg"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dialog
      fullScreen
      open={openImage}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <a
          href={image}
          download
          onClick={(e) => download(e)}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image} alt="fullview" style={{ width: "100%" }} />
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
  );
};

export default ImageFullView;
