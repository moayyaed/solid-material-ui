import {
  Backdrop,
  Button,
  ButtonVariant,
  CircularProgress,
  Color,
  Modal,
  useStyles,
} from "solid-material-ui";
import { createSignal, Show } from "solid-js";

const styles = useStyles({
  paper: {
    width: "400px",
    border: "2px solid #000",
    padding: "16px 32px 24px",
    position: "absolute",
    "box-shadow":
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "background-color": "var(--theme-palette-background-paper)",
  },
});

export function SimpleModal() {
  const [open, setOpen] = createSignal(false);
  const top = 50 + Math.floor(Math.random() * 10);
  const left = 50 + Math.floor(Math.random() * 10);
  const modalStyle = {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
  return (
    <div>
      <p>Click to get the full Modal experience!</p>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Show when={open()}>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open()}
          onClose={() => setOpen(false)}
          onBackdropClick={() => setOpen(false)}
          onEscapeKeyDown={() => setOpen(false)}
          backdrop={(context) => (
            <Backdrop open={context.open} onClick={context.onBackdropClick} />
          )}
        >
          {(context) => (
            <div
              ref={context.ref}
              style={{ ...context.style, ...modalStyle }}
              class={styles.paper}
            >
              <h2 id="simple-modal-title">Text in a modal</h2>
              <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <SimpleModal />
            </div>
          )}
        </Modal>
      </Show>
    </div>
  );
}

export function ModalSample() {
  const [open, setOpen] = createSignal(false);
  return (
    <div style={{ "flex-grow": 1, width: "80%" }}>
      <Button
        variant={ButtonVariant.Outlined}
        color={Color.Primary}
        onClick={() => setOpen(true)}
      >
        Show backdrop
      </Button>
      <Backdrop
        style={{
          color: "#fff",
          "z-index": "calc(var(--theme-zindex-drawer) + 1)" as any,
        }}
        open={open()}
        onClick={() => setOpen(false)}
      >
        <CircularProgress color={Color.Inherit} />
      </Backdrop>
      <SimpleModal />
    </div>
  );
}
