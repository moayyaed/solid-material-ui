import { JSX } from "solid-js";
import {
  Container,
  Direction,
  Divider,
  Grid,
  GridSize,
  Spacing,
  useStyles,
} from "solid-material-ui";

import { ThemeToggler } from "./ThemeToggler";
import { PaperSample } from "./PaperSample";
import { AvatarSample } from "./AvatarSample";
import { AppBarSample } from "./AppBarSample";
import { BadgeSample } from "./BadgeSample";
import { ButtonSample } from "./ButtonSample";
import { HiddenSample } from "./HiddenSample";

const styles = useStyles({
  container: `
      width: 100%;
      height: 100%;
      padding: 10px;
      & > * + * {
        margin-top: 16px;
      }
    `,
  spaced: `
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
  `,
});

export function MaterialSamples(): JSX.Element {
  return (
    <Container class={styles.container}>
      <div>Material UI Sample Holder</div>
      <ThemeToggler />
      <Divider class={styles.spaced} light />
      <PaperSample />
      <Divider class={styles.spaced} light />
      <AvatarSample />
      <Divider class={styles.spaced} light />
      <BadgeSample />
      <Divider class={styles.spaced} light />
      <AppBarSample />
      <Divider class={styles.spaced} light />
      <ButtonSample />
      <Divider class={styles.spaced} light />
      <HiddenSample />
      <Divider class={styles.spaced} light />
    </Container>
  );
}
