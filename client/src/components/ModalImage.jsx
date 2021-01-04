import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";



export default function ResponsiveDialog({ setOpenImage, openImage, image }) {



  const handleClose = () => {
    setOpenImage(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={openImage}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <img src={image} alt="fullview" style={{width: '100%'}}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
