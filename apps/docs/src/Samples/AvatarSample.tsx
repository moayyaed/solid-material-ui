import {
  AlignItems,
  AssignmentIcon,
  Avatar,
  FolderIcon,
  Grid,
  Justify,
  PageviewIcon,
} from "solid-material-ui";

export function AvatarSample() {
  return (
    <Grid container>
      <Grid
        container
        item
        justify={Justify.Center}
        alignItems={AlignItems.Center}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://skclusive.github.io/Skclusive.Material.Docs/_content/Skclusive.Material.Docs.App.View/images/avatar-1.jpg"
          style={{ margin: "10px" }}
          ref={(_: HTMLElement | undefined) => console.log(`avatar ref`, _)}
          onClick={() => console.log(`avatar 1 clicked`)}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://skclusive.github.io/Skclusive.Material.Docs/_content/Skclusive.Material.Docs.App.View/images/avatar-1.jpg"
          style={{ margin: "10px", width: "60px", height: "60px" }}
          onMouseDown={() => console.log(`avatar 1 mousedowned`)}
        />
      </Grid>
      <Grid
        container
        item
        justify={Justify.Center}
        alignItems={AlignItems.Center}
      >
        <Avatar style={{ margin: "10px" }}>
          <FolderIcon />
        </Avatar>
        <Avatar
          style={{
            margin: "10px",
            color: "#fff",
            "background-color": "#e91e63",
          }}
        >
          <PageviewIcon />
        </Avatar>
        <Avatar
          style={{
            margin: "10px",
            color: "#fff",
            "background-color": "#4caf50",
          }}
        >
          <AssignmentIcon />
        </Avatar>
      </Grid>
    </Grid>
  );
}
