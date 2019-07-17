import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleClick() {
    setClicked(true);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          {"Example of losing focus after pressing a button"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            The button has received focus and has been unmounted, the dialog
            loses focus and does not close by ESC
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {!clicked ? (
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid>
                <TextField id="name" fullWidth label="Description" value="" />
              </Grid>
              <Grid>
                <Button onClick={handleClick} color="primary">
                  CLICK ME
                </Button>
              </Grid>
            </Grid>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
}
