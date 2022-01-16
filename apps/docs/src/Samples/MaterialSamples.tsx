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
import { CardSample } from "./CardSample";
import { ListSample } from "./ListSample";
import { TableSample } from "./TableSample";
import { HiddenSample } from "./HiddenSample";
import { AlertSample } from "./AlertSample";
import { ProgressSample } from "./ProgressSample";
import { TransitionSample } from "./TransitionSample";
import { ModalSample } from "./ModalSample";
import { TextFieldSample } from "./TextFieldSample";
import { TextFieldOutlinedSample } from "./TextFieldOutlinedSample";
import { TextFieldFilledSample } from "./TextFieldFilledSample";
import { DialogSample } from "./DialogSample";
import { GridSample } from "./GridSample";
import { SwitchSample } from "./SwitchSample";
import { CheckboxSample } from "./CheckboxSample";
import { RadioSample } from "./RadioSample";

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
      <PaperSample />
      <Divider class={styles.spaced} light />
      <GridSample />
      <Divider class={styles.spaced} light />
      <HiddenSample />
      <Divider class={styles.spaced} light />
      <ProgressSample />
      <Divider class={styles.spaced} light />
      <ButtonSample />
      <Divider class={styles.spaced} light />

      <Grid container spacing={Spacing.Three}>
        <Grid item extraSmall={GridSize.Six}>
          <CardSample />
        </Grid>
        <Grid
          item
          container
          extraSmall={GridSize.Six}
          direction={Direction.Column}
          spacing={Spacing.Four}
        >
          <Grid item>
            <ListSample />
          </Grid>
          <Grid item>
            <AppBarSample />
          </Grid>
        </Grid>
      </Grid>
      <Divider class={styles.spaced} light />

      <Grid container spacing={Spacing.Three}>
        <Grid item extraSmall={GridSize.Three}>
          <AvatarSample />
        </Grid>
        <Grid item extraSmall={GridSize.Two}>
          <BadgeSample />
        </Grid>
        {/* <Grid item extraSmall={GridSize.Two}>
        <SvgIconSample />
      </Grid> */}
        <Grid item extraSmall={GridSize.Two}>
          <SwitchSample />
        </Grid>
        <Grid item extraSmall={GridSize.Two}>
          <CheckboxSample />
        </Grid>
        <Grid item extraSmall={GridSize.Three}>
          <RadioSample />
        </Grid>
      </Grid>
      <Divider class={styles.spaced} light />

      <TextFieldSample />
      <Divider class={styles.spaced} light />

      <TextFieldOutlinedSample />
      <Divider class={styles.spaced} light />

      <TextFieldFilledSample />
      <Divider class={styles.spaced} light />

      <TransitionSample />
      <Divider class={styles.spaced} light />

      <ModalSample />
      <Divider class={styles.spaced} light />

      <DialogSample />
      <Divider class={styles.spaced} light />

      <TableSample />
      <Divider class={styles.spaced} light />

      <AlertSample />
      <Divider class={styles.spaced} light />
    </Container>
  );
}
