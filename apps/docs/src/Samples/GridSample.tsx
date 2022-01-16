import { Grid, GridSize, Paper, Spacing } from "solid-material-ui";
import { styled } from "solid-styled-components";

const Block = styled(Paper)`
  padding: 16px;
  text-align: center;
`;

export function GridSample() {
  return (
    <div style="flex-grow: 1;">
      <Grid container spacing={Spacing.Three}>
        <Grid item extraSmall={GridSize.True}>
          <Block>xs</Block>
        </Grid>
        <Grid item extraSmall={GridSize.True}>
          <Block>xs</Block>
        </Grid>
        <Grid item extraSmall={GridSize.True}>
          <Block>xs</Block>
        </Grid>
      </Grid>
      <Grid container spacing={Spacing.Three}>
        <Grid item extraSmall={GridSize.True}>
          <Block>xs</Block>
        </Grid>
        <Grid item extraSmall={GridSize.Six}>
          <Block>xs=6</Block>
        </Grid>
        <Grid item extraSmall={GridSize.True}>
          <Block>xs</Block>
        </Grid>
      </Grid>
    </div>
  );
}
