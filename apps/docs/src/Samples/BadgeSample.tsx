import {
  AlignItems,
  Avatar,
  Badge,
  BadgeOverlap,
  BadgeVariant,
  Color,
  Grid,
  Horizontal,
  Justify,
  MailIcon,
  Vertical,
} from "solid-material-ui";
import { css } from "solid-styled-components";

const badgeStyleTwo = css`
  box-shadow: 0 0 0 2px var(--theme-palette-background-paper);
  background-color: #44b700;

  @keyframes badge-style-two-keyframes {
    0% {
      opacity: 1;
      transform: scale(0.8);
    }
    100% {
      opacity: 0;
      transform: scale(2.4);
    }
  }

  &::after {
    top: 0;
    left: 0;
    width: 100%;
    border: 1px solid #44b700;
    height: 100%;
    content: "";
    position: absolute;
    animation: badge-style-two-keyframes 1.2s infinite ease-in-out;
    border-radius: 50%;
  }
`;

export function BadgeSample() {
  return (
    <Grid container justify={Justify.Center} alignItems={AlignItems.Center}>
      <Badge
        style={{ margin: "calc(var(--theme-spacing) * 2px)" }}
        badgeText="4"
        color={Color.Secondary}
      >
        <MailIcon />
      </Badge>
      <Badge
        overlap={BadgeOverlap.Circle}
        vertical={Vertical.Bottom}
        horizontal={Horizontal.Right}
        variant={BadgeVariant.Dot}
        badgeClass={badgeStyleTwo}
      >
        <Avatar
          alt="Stock avatar"
          src="https://skclusive.github.io/Skclusive.Material.Docs/_content/Skclusive.Material.Docs.App.View/images/avatar-1.jpg"
        />
      </Badge>
    </Grid>
  );
}
