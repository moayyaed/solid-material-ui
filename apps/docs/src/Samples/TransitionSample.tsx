import {
  Button,
  ButtonVariant,
  CircularProgress,
  Direction,
  Fade,
  Grid,
  Grow,
  Paper,
  Spacing,
} from "solid-material-ui";

import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";

const Block = styled(Paper)`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export function TransitionSample() {
  const [visible, setVisible] = createSignal(true);
  return (
    <div style={{ "flex-grow": 1, width: "80%" }}>
      <Grid container direction={Direction.Row} spacing={Spacing.Eight}>
        <Grid item>
          <Fade in={visible()} style={{ width: "300px", height: "300px" }}>
            {(context) => (
              <Block
                ref={context.ref}
                class={context.class}
                style={context.style}
              >
                <CircularProgress />
              </Block>
            )}
          </Fade>
        </Grid>
        <Grid item>
          <Grow in={visible()} style={{ width: "300px", height: "300px" }}>
            {(context) => (
              <Block
                ref={context.ref}
                class={context.class}
                style={context.style}
              >
                <CircularProgress />
              </Block>
            )}
          </Grow>
        </Grid>
      </Grid>
      <Button
        variant={ButtonVariant.Contained}
        onClick={() => setVisible((prev) => !prev)}
      >
        {`Toggle: ${visible() ? "OFF" : "ON"}`}
      </Button>
    </div>
  );
}
