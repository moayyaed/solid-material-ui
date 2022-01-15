import {
  AppBar,
  AppBarPosition,
  Button,
  Color,
  IconButton,
  IconButtonEdge,
  MenuIcon,
  Toolbar,
  Typography,
  TypographyVariant,
} from "solid-material-ui";

import { ThemeToggler } from "./ThemeToggler";

export function AppBarSample() {
  return (
    <div style={{ "flex-grow": 1, width: "80%" }}>
      <AppBar position={AppBarPosition.Static}>
        <Toolbar>
          <IconButton
            edge={IconButtonEdge.Start}
            style={{ "margin-right": "16px" }}
            color={Color.Inherit}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant={TypographyVariant.H6} style={{ "flex-grow": 1 }}>
            News
          </Typography>
          <ThemeToggler />
          <Button color={Color.Inherit}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
