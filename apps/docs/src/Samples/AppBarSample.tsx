import {
  AppBar,
  AppBarPosition,
  Toolbar,
  Typography,
  TypographyVariant,
} from "solid-material-ui";

export function AppBarSample() {
  return (
    <div style={{ "flex-grow": 1, width: "80%" }}>
      <AppBar position={AppBarPosition.Static}>
        <Toolbar>
          <Typography variant={TypographyVariant.H6} style={{ "flex-grow": 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
