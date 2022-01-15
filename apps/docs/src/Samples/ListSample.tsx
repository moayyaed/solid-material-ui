import {
  Divider,
  DraftsIcon,
  InboxIcon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "solid-material-ui";

import { styled } from "solid-styled-components";

const Root = styled("div")`
  width: 100%;
  max-width: 360px;
  background-color: var(--theme-palette-background-paper);
`;

export function ListSample() {
  return (
    <Root>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </Root>
  );
}
