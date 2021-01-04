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
