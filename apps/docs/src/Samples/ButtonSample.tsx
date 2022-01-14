import {
  AddIcon,
  AddShoppingCartIcon,
  Button,
  ButtonVariant,
  Color,
  DeleteIcon,
  EditIcon,
  Fab,
  IconButton,
  SendIcon,
} from "solid-material-ui";

export function ButtonSample() {
  return (
    <div>
      <Button variant={ButtonVariant.Contained} style={{ margin: "8px" }}>
        Default
      </Button>
      <Button
        variant={ButtonVariant.Contained}
        color={Color.Primary}
        style={{ margin: "8px" }}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button color={Color.Secondary} style={{ margin: "8px" }}>
        Secondary
      </Button>
      <Button
        variant={ButtonVariant.Contained}
        endIcon={<SendIcon />}
        color={Color.Secondary}
        disabled
        style={{ margin: "8px" }}
      >
        Send
      </Button>
      <Button
        variant={ButtonVariant.Outlined}
        href="#contained-buttons"
        style={{ margin: "8px" }}
      >
        Link
      </Button>
      <IconButton
        color={Color.Secondary}
        style={{ margin: "8px" }}
        aria-label="add to shopping cart"
      >
        <AddShoppingCartIcon />
      </IconButton>
      <Fab color={Color.Primary} aria-label="add" style={{ margin: "8px" }}>
        <AddIcon />
      </Fab>
      <Fab color={Color.Secondary} aria-label="edit" style={{ margin: "8px" }}>
        <EditIcon />
      </Fab>
    </div>
  );
}
