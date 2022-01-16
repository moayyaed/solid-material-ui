import {
  AppBar,
  Button,
  ButtonVariant,
  CloseIcon,
  Color,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButtonEdge,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Spacing,
  Toolbar,
  Typography,
  TypographyVariant,
} from "solid-material-ui";
import { createSignal } from "solid-js";

export function DialogSample() {
  return (
    <Grid container spacing={Spacing.Eight}>
      <Grid item>
        <CustomizedDialog />
      </Grid>
      <Grid item>
        <FullScreenDialog />
      </Grid>
    </Grid>
  );
}

export function CustomizedDialog() {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const text = () => `${open() ? "Close" : "Open"} dialog`;
  return (
    <div>
      <Button
        variant={ButtonVariant.Outlined}
        color={Color.Secondary}
        onClick={handleOpen}
      >
        {text()}
      </Button>
      <Dialog
        open={open()}
        onClose={handleClose}
        // onBackdropClick={handleClose}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle
          style={{ margin: "0px", padding: "16px" }}
          disableTypography
          id="customized-dialog-title"
        >
          <Typography variant={TypographyVariant.H6}>Modal title</Typography>
          <IconButton
            aria-label="close"
            style={{
              top: "8px",
              color: "#9e9e9e",
              right: "8px",
              position: "absolute",
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ padding: "16px" }} dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions style={{ margin: "0px", padding: "8px" }}>
          <Button onClick={handleClose} color={Color.Primary}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function FullScreenDialog() {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const text = () => `${open() ? "Close" : "Open"} FullScreen Dialog`;
  return (
    <div>
      <Button
        variant={ButtonVariant.Outlined}
        color={Color.Primary}
        onClick={handleOpen}
      >
        {text()}
      </Button>
      <Dialog
        fullScreen
        open={open()}
        onClose={handleClose}
        onBackdropClick={handleClose}
        aria-labelledby="customized-dialog-title"
      >
        <AppBar style={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge={IconButtonEdge.Start}
              color={Color.Inherit}
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant={TypographyVariant.H6}
              style={{ flex: 1, "margin-left": "16px" }}
            >
              Sound
            </Typography>
            <Button color={Color.Inherit} onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
