import {
  AccountIcon,
  AlignItems,
  Color,
  FontSize,
  Grid,
  Justify,
  WorkIcon,
} from 'solid-material-ui';

export function SvgIconSample() {
  return (
    <Grid container justify={Justify.Center} alignItems={AlignItems.Center}>
      <WorkIcon color={Color.Primary} style={{ margin: '10px' }} />
      <AccountIcon fontSize={FontSize.Large} />
    </Grid>
  );
}
