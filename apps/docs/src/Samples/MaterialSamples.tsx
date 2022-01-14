import { JSX } from "solid-js";
import { useStyles } from "solid-material-ui";

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
});

export function MaterialSamples(): JSX.Element {
  return (
    <div class={styles.container}>
      <div>Material UI Sample Holder</div>
      <ThemeToggler />
      <PaperSample />
      <AvatarSample />
      <BadgeSample />
      <AppBarSample />
      <ButtonSample />
      <HiddenSample />
    </div>
  );
}
